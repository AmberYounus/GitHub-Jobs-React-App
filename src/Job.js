import React from "react";
import { Card } from "react-bootstrap";

export default function Job({job}) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>
                                {job.title}
                            </Card.Title>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}