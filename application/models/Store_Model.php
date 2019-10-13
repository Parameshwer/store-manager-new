<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Store_Model extends CI_Model {

	public function getStores(){		
		$this->db->select("*");
		$this->db->from("stores");
		$this->db->where('store_status', '1');
		$query = $this->db->get();        
		return $query->result();

	}

}