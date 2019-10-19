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
		$storesData = $this->Store_Model->getStores();
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
}	