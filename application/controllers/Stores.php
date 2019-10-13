<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Stores extends CI_Controller {

	function __construct(){
		parent::__construct();	
		$this->load->model('Store_Model');
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
}	