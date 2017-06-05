
export class Activity {
  id: number;
  name: string;
  description: string;
  points: number;
  $ref: string;
  $key: string;

  static fromJsonList(array): Activity[] {
    return array.map(Activity.fromJson);
  }
  static fromJson({id, name, description, points, $ref, $key}): Activity {
    return new Activity(id, name, description, points, $ref, $key);
  }
  constructor(id: number, name: string, description: string, points: number, $ref: string, $key: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.points = points;
    this.$ref = $ref;
    this.$key = $key;
  }

}
