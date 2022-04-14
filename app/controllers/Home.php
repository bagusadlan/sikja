<?php

class Home extends Controller {
    public function index()
    {
        $data['title'] = 'SI Kenaikan Pangkat';
        $this->view('templates/header', $data);
        $this->view('page/index');
        $this->view('templates/footer');
    }
}