import axios, { AxiosInstance, AxiosPromise } from "axios"
// import { NewEventItem } from "@/types"

const etsyApiKey = "gcjl4z2u0c0miygupkqkwank"

const apiClient: AxiosInstance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/JoshW8/real-world-vue",
  baseURL: "https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export default {
  getListings(): AxiosPromise {
    return apiClient.get(
      `/shops/QuantumMoonCrystals/listings/active?api_key=${etsyApiKey}&includes=Images`
    )
  },
  //   // prop id TYPE any
  //   getEvent(id: number): AxiosPromise {
  //     return apiClient.get("/events/" + id)
  //   },

  //   postEvent(event: NewEventItem): AxiosPromise {
  //     return apiClient.post("/events", event)
  //   },
}
