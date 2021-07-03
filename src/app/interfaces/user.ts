export interface User {
  id: number;
  fullName: string;
  age: string;
  statistics: UserStatistics[];
}

export interface UserStatistics {
  field: string;
  value: string;
}
