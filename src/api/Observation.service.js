import {
    GET_OBSERVATIONS_ENDPOINT
} from "config";
import { BaseService } from "api";

// const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNmI4ZWJjZi01MjU5LTQxMGQtYTRmOS1hOWU0NTQxMjJhMTAiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNTU5NDIwNzA5LCJleHAiOjE1NTk0MjEwMDl9.O3NR4aOk66cTGv5wwp65VQINg_NtTpBcRzyqGc3Hekk";
export default class ObservationService extends BaseService {
    getObservations() {
        return super
        .sendRequest(GET_OBSERVATIONS_ENDPOINT, "GET")
        .then(response => response.json())
    }

}