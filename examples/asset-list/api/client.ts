class ApiClient {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://api-osmosis.imperator.co';
  }

  handleError = (resp: Response) => {
    if (!resp.ok) throw Error(resp.statusText);
    return resp;
  };

  get(endpoint: string) {
    return fetch(this.baseURL + endpoint)
      .then(this.handleError)
      .then((res) => res.json());
  }
}

const apiClient = new ApiClient();

export default apiClient;
