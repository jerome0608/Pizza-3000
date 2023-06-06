import React from 'react'
import './App.scss';
import { Row, Col, Card } from 'antd';
import { FaPizzaSlice } from "react-icons/fa";
import { GiFlamer } from "react-icons/gi";
import { HiOutlineTruck } from "react-icons/hi";
import { MdEuroSymbol } from "react-icons/md";


const { Meta } = Card;


const App = () => {
  return (
    <div class="container">
      <header>
        <FaPizzaSlice />
        <h1>Pizza 3000</h1>
      </header>

      <div className="wrapper">

        <Row gutter={20}>
          <Col className="item" md={8}>
            <Card
              cover={<HiOutlineTruck />} >
              <Meta title="Nouvelle Commande" description="Créer et enregistrer une nouvelle commande" />
            </Card>
          </Col>

          <Col className="item" md={8}>
            <Card
              cover={<GiFlamer />} >
              <Meta title="Commandes en cours" description="Voir le détail des commandes en cours" />
            </Card>
          </Col>

          <Col className="item" md={8}>
            <Card
              cover={<MdEuroSymbol />} >
              <Meta title="Paiement Commande" description="Encaisser une commande" />
            </Card>
          </Col>
        </Row>

      </div>

    </div>
  )
}

export default App
