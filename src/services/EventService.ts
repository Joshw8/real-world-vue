import axios, { AxiosInstance, AxiosPromise } from "axios"
import { NewEventItem } from "@/types"

const apiClient: AxiosInstance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/JoshW8/real-world-vue",
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export default {
  getEvents(): AxiosPromise {
    return apiClient.get("/events")
  },
  // prop id TYPE any
  getEvent(id: number): AxiosPromise {
    return apiClient.get("/events/" + id)
  },

  postEvent(event: NewEventItem): AxiosPromise {
    return apiClient.post("/events", event)
  },
}
