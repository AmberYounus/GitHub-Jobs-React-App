import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import ReactMarkdown from "react";

export default function Job({ job }) {
    return (

        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge className="mr-2" variant="secondary">{job.type}</Badge>
                        <Badge className="text-dark" variant="secondary">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>

                    </div>
                    <img className="d-none d-md-block" alt={job.company} src={job} />
                </div>
                <Card.Text><Button variant="primary" onClick={() => { }}></Button></Card.Text>
            </Card.Body>
        </Card>

    )
}