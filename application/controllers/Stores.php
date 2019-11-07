<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Stores extends CI_Controller {

	function __construct(){
		parent::__construct();	
		$this->load->model('Store_Model');
		//print_r($this->session->all_userdata());
		if(! $this->session->userdata('adid')) {
			redirect('admin/login');		
		}
	}

	public function index()
	{					
		$this->load->view('../../buildFiles/index.php');		
	}
	public function getStores() {		
		$obj=json_decode(file_get_contents('php://input'));	

		$storesData = $this->Store_Model->getStores($obj);
		echo json_encode($storesData);
	}
	public function getUserDetails() {			
		$userDetails = $this->session->all_userdata();
		echo json_encode($userDetails['adid']);
	}
	public function getStoreDetails() {
		$obj=json_decode(file_get_contents('php://input'));
		$storeDetails = $this->Store_Model->getStoreDetails($obj->id);
		echo json_encode($storeDetails);
	}
	public function getMasterItems() {
		$masterItems['itemTypes'] = $this->Store_Model->getItemTypes();
		$masterItems['itemVariants'] = $this->Store_Model->getItemVariants();
		echo json_encode($masterItems);
	}
	public function saveStock() {
		$obj=json_decode(file_get_contents('php://input'));				
		$storeDetails = $this->Store_Model->getStroreDetailsById($obj->storeId);
		return $this->Store_Model->saveStock($obj);
	}
	public function getStock() {
		$obj=json_decode(file_get_contents('php://input'));								
		echo json_encode($this->Store_Model->getStock($obj->storeId));
	}
	public function getItemDetails() {
		$obj=json_decode(file_get_contents('php://input'));		
		$actualArray = explode(",",$obj->billingIds);		
		$allData = $this->Store_Model->getItemDetails($obj);
		$validItemsArray = [];
		$allItemsPrice = 0;
		if($allData) {
			foreach ($allData as $key => $value) {
				array_push($validItemsArray,$value->id);
				$allItemsPrice = $allItemsPrice + $value->item_sell_price;
			}	

			if(array_diff($actualArray,$validItemsArray)) {
				$status = array('status' => false,"message" => 'Invalid Items Ids');
			} else {
				$status = array('status' => true,"data" => $allData,"totalPrice" => $allItemsPrice);
			}
		} else {
			$status = array('status' => false);
		}
		
		
		echo json_encode($status);
	}
	public function saveBill() {
		$obj=json_decode(file_get_contents('php://input'));
		$itemsStatusUpdate = $this->Store_Model->itemsStatusUpdate($obj);
		if($itemsStatusUpdate) {
			$data = $this->Store_Model->saveBill($obj);
			if($data) {
				$status = array('status' => true,"message" => 'Order saved successfully');
			} else  {
				$status = array('status' => true,"message" => 'Order not saved successfully');
			}
			echo json_encode($status);
		}
	}
	public function getSales() {
		$obj=json_decode(file_get_contents('php://input'));
		$data = $this->Store_Model->getSales($obj);
		foreach ($data as $key => $value) {
			if($value->order_items) {
				$data[$key]->all_order_items = $this->Store_Model->getItemByids($value->order_items);
			}
		}		

		if($data) {
			$status = array('status' => true,"data" => $data);
		} else  {
			$status = array('status' => false);
		}
		echo json_encode($status);
	}
}	