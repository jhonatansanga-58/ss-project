export class CreateEventDto {
  title: string;
  description: string;;
  location: string;
  start_date: string;
  end_date: string;
  time: string;
  min_Age: number;
}
export class UpdateEventDto {
  id: number;
  title: string;
  description: string;;
  location: string;
  start_date: string;
  end_date: string;
  time: string;
  min_Age: number;
}