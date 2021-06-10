import axios, { AxiosInstance, AxiosPromise } from "axios"
import { NewEventItem } from "@/types"

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/JoshW8/real-world-vue",
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

  postEvent(form: NewEventItem): AxiosPromise {
    return apiClient.post("/services", form)
  },
}
