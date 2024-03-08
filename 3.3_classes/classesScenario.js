class Course {
  // Finish this class
  constructor(title, timeRequired) {
    this.title = title;
    this.timeRequired = timeRequired;
    this.topicList = [];
  }
  get topics() {
    return this.topicList;
  }
  addTopics(topic) {
    this.topicList.push(topic);
  }
}
class OrientationCourse extends Course {
  // Extend the parent class
  constructor(title, timeRequired) {
    super(title, timeRequired);
    this.isRequired = true;
  }
  // Finish this child class
}
