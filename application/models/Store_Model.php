<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Store_Model extends CI_Model {

	public function getStores() {		
		$this->db->select("*");
		$this->db->from("stores");
		$this->db->where('store_status', '1');
		$query = $this->db->get();        
		return $query->result();

	}
	public function getStoreDetails($id) {		
		$this->db->select("*");
		$this->db->from("stores");
		$this->db->where('id', $id);
		$query = $this->db->get();        
		return $query->result();
	}

	public function getItemTypes() {
		$this->db->select("*");
		$this->db->from("item_types");		
		$query = $this->db->get();        
		return $query->result();
	}
	public function getItemVariants() {
		$this->db->select("*");
		$this->db->from("item_variants");		
		$query = $this->db->get();        
		return $query->result();
	}
}