import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

export interface WeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
    pressure_mb: number;
    pressure_in: number;
    condition: {
      text: string;
    };
  };
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent implements OnInit {


  weatherData!: WeatherData;;
  name: string = '';
  localTime: string = '';
  temp_c: number = 0;
  temp_f: number = 0;
  humidity: number = 0;
  wind_kph: number = 0;
  wind_mph: number = 0;
  pressure_mb: number = 0;
  pressure_in: number = 0;
  condition_text: string = '';

  ngOnInit(): void {
  }

  constructor(private weatherService: WeatherService) { }

  /**
   * Obtém dados meteorológicos em tempo real para a cidade especificada.
   * Chama o serviço de clima para buscar informações atuais sobre o clima da cidade,
   * e atualiza a propriedade weatherData com os dados recebidos.
   * Em caso de erro, exibe o erro no console.
   * @returns {void}
   */
  getWeatherInRealTime(): void {
    this.weatherService.getWeatherInRealTime(this.name).subscribe(
      (data: WeatherData) => {
        this.weatherData = data;
        this.getData();
        console.log('Dados:', this.weatherData);
      }, (error) => {
        console.log(error);
      }
    )
  }

  getData(): void {
    if (this.weatherData) {
      this.name = this.weatherData['location']['name'];
      this.localTime = this.weatherData['location']['localtime'];
      this.temp_c = this.weatherData['current']['temp_c'];
      this.temp_f = this.weatherData['current']['temp_f'];
      this.humidity = this.weatherData['current']['humidity'];
      this.wind_kph = this.weatherData['current']['wind_kph'];
      this.wind_mph = this.weatherData['current']['wind_mph'];
      this.pressure_mb = this.weatherData['current']['pressure_mb'];
      this.pressure_in = this.weatherData['current']['pressure_in'];
      this.condition_text = this.weatherData['current']['condition']['text'];
    }
  }
}
