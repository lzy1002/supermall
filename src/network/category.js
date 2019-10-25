import {request} from "./request.js";

export function getCategoryTitles() {
  return request({
    url: "/category"
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey: maitKey
    }
  })
}

export function getSubDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey: miniWallkey,
      type: type
    }
  })
}
