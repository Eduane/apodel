export interface RestaurantSchedule {
    day: string;
    openFrom: string;
    closeAt: string;
  }
  
 export interface RestaurantData {
    name: string;
    schedule: RestaurantSchedule[];
  }
  