<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Store_Model extends CI_Model {

	public function getStores($params) {
		$multipleWhere = ['store_status' => 1];
		if($params->user_store == 0) {
			$multipleWhere = ['store_status' => 1];
		} else if($params->user_store == 3) {			
			$multipleWhere = ['store_status' => 1, 'id' => $params->user_store];
		}
		
		$this->db->select("*");
		$this->db->from("stores");
		$this->db->where($multipleWhere);
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
	public function getStroreDetailsById($storeId) {
		$this->db->select("*");
		$this->db->from("stores");	
		$this->db->where('id', $storeId);	
		$query = $this->db->get();        
		return $query->result();
	}
	public function saveStock($itemDetails) {
		for ($i=1; $i <= $itemDetails->noOfItems ; $i++) { 
			$data = array(
			    'item_name' => $itemDetails->itemTypes,
			    'item_brand' => $itemDetails->itemBrand,
			    'item_variant' => $itemDetails->itemVariants,			    
			    'item_actual_price' => $itemDetails->actualAmount,
			    'item_sell_price' => $itemDetails->sellingAmount,
			    'item_store' => $itemDetails->storeId,
			);
			$this->db->insert('items', $data);
		}
		
		
	}
	public function getStock($storeId) {
		$query = $this->db->query('SELECT i.item_brand,i.item_actual_price,i.item_sell_price,it.item_name,iv.variant_name, COUNT(i.item_brand) as total FROM items i INNER JOIN item_types it on it.id = i.item_name INNER JOIN item_variants iv on iv.id = i.item_variant WHERE i.item_status = 1 AND i.item_store= "'.$storeId.'" GROUP BY i.item_name, i.item_variant, i.item_brand');		
		return $query->result();
	}
	public function getItemDetails($params) {				
		if($params->billingIds != null) {
			$query = $this->db->query("SELECT i.id, i.item_brand,i.item_sell_price,it.item_name,iv.variant_name FROM items i INNER JOIN item_types it on it.id = i.item_name INNER JOIN item_variants iv on iv.id = i.item_variant WHERE i.item_status = 1 AND i.item_store= $params->storeId AND i.id IN ($params->billingIds)");	
			return $query->result();	
		}
		
	}
	public function itemsStatusUpdate($obj) {
		if($obj->billingIds) {
			$query = $this->db->query("UPDATE items SET item_status = 2 WHERE id IN ($obj->billingIds)");	  
	   		return $query;
	   	}
	}
	public function saveBill($obj) {

		 $query = $this->db->query("INSERT INTO item_order_table (order_items,store_id, order_total_after_discount, order_discount, order_total, created_date) VALUES 
	   		('".$obj->billingIds."','".$obj->storeId."','".$obj->grandTotal."','".$obj->discountPrice."','".$obj->totalPrice."','".date("Y-m-d")."')"
	   	);	  
	   	return $query;
	}

	public function getSales($obj) {
		$query = $this->db->query("SELECT * FROM item_order_table WHERE store_id = $obj->storeId");				
		return $query->result();
	}
	public function getItemByids($itemIds) {
		$query = $this->db->query("SELECT i.id, i.item_brand,i.item_sell_price,it.item_name,iv.variant_name FROM items i INNER JOIN item_types it on it.id = i.item_name INNER JOIN item_variants iv on iv.id = i.item_variant WHERE i.item_status = 1 AND i.id IN ($itemIds)");				
		return $query->result();
	}
}