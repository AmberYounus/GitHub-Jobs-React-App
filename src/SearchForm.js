import React from "react";
import { Form } from "react-bootstrap";

export default function SearchForm(onParamChange){
  <Form >
    <Form.Row>
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={description} onChange={onParamChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="description" value={location} onChange={onParamChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Check type="checkbox" name="full_time" id="full-time" value={full_time} label="Only Full time" onChange={onParamChange}/>
        </Form.Group>
    </Form.Row>
  </Form>
}