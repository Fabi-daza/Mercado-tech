import React from 'react'
import Card from "react-bootstrap/Card";

const Perfil = () => {
  return (
    <div>
       <Card className="border-0" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="rounded-circle border border-primary h-30 w-30 m-auto"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Perfil