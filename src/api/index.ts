import axios from "axios";
import dotenv from "dotenv";
import { HttpClient } from "./client";
import {
  AllIngredientsResponse,
  AvailableIngredientsResponse,
  CocktailRecipesResponse,
} from "./interface";
import { AxiosHttpClientProvider } from "./provider";

dotenv.config();

enum EndpointEnum {
  ALL_INGREDIENTS = "all-ingredients",
  AVAILABLE_INGREDIENTS = "available-ingredients",
  RECIPES = "cocktails",
}

class CocktailsAPI {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private buildEndpointUrl(endpoint: EndpointEnum) {
    return `${this.httpClient.baseUrl}/${endpoint}`;
  }

  async allIngredients(): Promise<AllIngredientsResponse> {
    /**
     * Endpoint: https://cocktails.deno.dev/all-ingredients
     */
    let data = [];
    try {
      const response = await axios.get(
        this.buildEndpointUrl(EndpointEnum.ALL_INGREDIENTS)
      );
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  }

  async availableIngredients(): Promise<AvailableIngredientsResponse> {
    /**
     * Endpoint: https://cocktails.deno.dev/available-ingredients
     */
    let data = [];
    try {
      const response = await axios.get(
        this.buildEndpointUrl(EndpointEnum.AVAILABLE_INGREDIENTS)
      );
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  }

  async recipes(): Promise<CocktailRecipesResponse> {
    /**
     * Endpoint: https://cocktails.deno.dev/cocktails
     */
    let data = [];
    try {
      const response = await axios.get(
        this.buildEndpointUrl(EndpointEnum.RECIPES)
      );
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  }
}

const API_BASE_URL = process.env.API_BASE_URL || "not-defined";
const axiosHttpClientProvider = new AxiosHttpClientProvider(API_BASE_URL);
const httpClient = new HttpClient(axiosHttpClientProvider);
const api = new CocktailsAPI(httpClient);

export default api;
