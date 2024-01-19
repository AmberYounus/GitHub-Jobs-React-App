import React from "react";
import { Form, FormGroup, FormLabel, FormControl, Col,FormCheck } from "react-bootstrap";

 export default function SearchForm({ params,onParamChange}) {
  return (
    <Form className="mb-4">
      {/* <Form.Row className="align-items-end"> */}

      {/* Add description and location */}
        <FormGroup as={Col}>
          <FormLabel>Description</FormLabel>
          <FormControl type="text" name="description" id="description" value={params.description} onChange={onParamChange} />
        </FormGroup>

        <FormGroup as={Col}>
          <FormLabel>Location</FormLabel>
          <FormControl type="text" name="location" id="location" value={params.location} onChange={onParamChange} />
        </FormGroup>

        <FormGroup as={Col} xs="auto" className="ml-2">
          <FormCheck type="checkbox" className="mb-2" name="full_time" id="full-time" value={params.full_time} label="Only Full time" onChange={onParamChange} />
        </FormGroup>

      {/* </Form.Row> */}
    </Form>
  )
}
