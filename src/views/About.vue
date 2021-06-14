<template>
  <div class="about">
    <p>A site for events to better the world</p>
    <div
      v-for="listing in listings"
      :key="listing.listing_id"
      class="etsyListing"
    >
      <img :src="listing.Images[0].url_fullxfull" />
      <h5 class="mt-2 mb-2 px-2">{{ listing.title }}</h5>
      <p style="font-size: 14px; text-align: left" class="px-2">
        {{ listing.description }}
      </p>
      <h6 class="px-2">{{ listing.currency_code }} {{ listing.price }}</h6>
      <p>quantity available {{ listing.quantity }}</p>
    </div>
    <!-- {{ listings }} -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import EtsyService from "@/services/EtsyService"
import { EtsyResult } from "@/types"

export default defineComponent({
  setup() {
    const state = reactive({
      listings: [] as EtsyResult[],
    })

    EtsyService.getListings()
      .then((response) => {
        console.log(response)
        state.listings = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style>
.etsyListing {
  border: 1px grey solid;
  box-shadow: 0px 0px 5px 3px #d8d8d8;
  margin-bottom: 20px;
  border-radius: 5px;
}
.mt-2 {
  margin-top: 0.25em;
}
.mb-2 {
  margin-bottom: 0.25em;
}
.px-2 {
  padding-right: 0.25em;
  padding-left: 0.25em;
}
</style>
