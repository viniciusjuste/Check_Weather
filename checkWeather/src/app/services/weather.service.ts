import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../components/weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'e0f13a2a4af545e5bc3233125253001';
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  /**
   * Realiza uma requisição para a API de clima e retorna o estado atual do clima na cidade informada.
   * @param city a cidade para a qual se deseja obter o clima.
   * @returns um observable que emite um objeto com o clima atual.
   */
  getWeatherInRealTime(city: string): Observable<WeatherData> {
    if(!city){
      console.error('City is required');
    }
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.http.get<WeatherData>(url);
  }
  

  constructor(private http: HttpClient) { }
}
