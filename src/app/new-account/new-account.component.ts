import { Component, EventEmitter, Output } from "@angular/core";
import { LoggingService } from "../logging/logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);

    // console.log("A server status changed, new status: " + accountStatus);
  }
}
