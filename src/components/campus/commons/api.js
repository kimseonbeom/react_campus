import axios from "axios";

export function getHomeworkList() {
  return axios.get('/api/homework/list');
}