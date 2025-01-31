import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'London';
  ngOnInit(): void {
    this.getWeatherInRealTime()
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
    this.weatherService.getWeatherInRealTime(this.city).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log('Dados:',this.weatherData);
      }, (error) => {
        console.log(error);
      }
    )
  }
}
