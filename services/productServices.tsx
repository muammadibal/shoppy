import axios from '../config/axiosConfig'

export const getProductServices = async () => {
  const res = await axios.get(`/products`)

  return res.data// as IProduct[]
}
