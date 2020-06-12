import { Injectable } from '@angular/core';
import { Task } from './pages.model';
import { Subject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // public taskChanged = new Subject<Task[]>();
  private Tasks: Observable<Task[]>;
  private taskscollection: AngularFirestoreCollection<Task>;


 /* public finishedTaskChanged = new Subject<Task[]>();

  private _finishedTasks: Task[] = [];
  private _tasks: Task[] = [
    new Task(
      'first task',
      new Date(),
      'some Details'
    ),
    new Task(
      'Second task',
      new Date(),
      'other Details'
    ),
    new Task(
      'third task',
      new Date(),
      'some Details'
    ),
    new Task(
      'fourth task',
      new Date(),
      'other Details'
    ),
    new Task(
      'fifth task',
      new Date(),
      'some Details'
    ),
    new Task(
      'sixth task',
      new Date(),
      'other Details'
    ),
  ];

*/
  constructor(private db : AngularFirestore) {
    this.taskscollection = this.db.collection<Task>('tasks');
    this.Tasks=this.taskscollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
        });
      })
    );
  }

  gettasks() : Observable<Task[]>{
   // return [...this._tasks];
   return this.Tasks;
  }

 /* getfinishedTasks(): Observable<task> {
   // return [...this._finishedTasks];

  }*/


  getTask(id: string) {
   return this.taskscollection.doc<Task>(id).valueChanges();
  }

  addTask(task: Task) :Promise<any> {
   // this._tasks.push(task);
    // this.taskChanged.next([...this._tasks]);
    return this.taskscollection.add(JSON.parse(JSON.stringify(task)));
  }

  deleteTask(id: string) {

    return this.taskscollection.doc(id).delete();
    /* this._tasks.splice(index, 1);
    this.taskChanged.next([...this._tasks]);*/
  }

 /* onFinishTask(index: number) {


     this._finishedTasks.push(this._tasks[index]);
    this.finishedTaskChanged.next([...this._finishedTasks]);
    this.deleteTask(index);
  }

  deleteFinishedTask(index: number) {
    this._finishedTasks.splice(index, 1);
    this.finishedTaskChanged.next([...this._finishedTasks]);
  }
*/
  updateTask(id:string, task: Task) {

    return this.taskscollection.doc(id).update(task);

  /*  console.log(this._tasks[index]);
    const newTask: Task = new Task(task.title, task.date, task.details);
    this._tasks[index] = newTask;
    console.log(this._tasks[index]);
    this.taskChanged.next([...this._tasks]);
    */
  }
}
