export interface message {
  id: string;
  sender: string;
  messageSent: string;
}

export interface poll {
  name: string;
  points: number;
}

export interface points {
  effort: number;
  time: number;
}
