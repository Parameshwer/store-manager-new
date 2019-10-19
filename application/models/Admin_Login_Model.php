<?php
defined('BASEPATH') OR exit('No direct script access allowed');
Class Admin_Login_Model extends CI_Model {


	public function validatelogin($username,$password) {
		$this->db->select("id, user_name, user_email, user_store, user_role");
		$query=$this->db->where(['user_name'=>$username,'user_password'=>$password]);
		$account=$this->db->get('users')->row();
		if($account!=NULL){
			return $account;
		}
		return NULL;
	}
}

