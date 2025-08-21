import { Component, input, Input, output } from "@angular/core";
import { type User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  get imagePath() {
    return 'assets/' + this.user.avatar
  }

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();

  selected = input.required<boolean>()
  select = output<string>();

  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/' + this.avatar();
  // })
  // get imagePath(): string {
  //   return 'assets/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}