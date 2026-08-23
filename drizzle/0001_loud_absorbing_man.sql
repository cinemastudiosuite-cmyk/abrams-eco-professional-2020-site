PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`message` text,
	`building_address` text,
	`management_type` text,
	`sz_status` text,
	`apartments_count` integer,
	`lokali_count` integer,
	`garaze_count` integer,
	`year_built` integer,
	`current_problems` text,
	`existing_manager_problem` text,
	`needs_meeting_presence` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_leads`("id", "name", "email", "phone", "message", "building_address", "management_type", "sz_status", "apartments_count", "lokali_count", "garaze_count", "year_built", "current_problems", "existing_manager_problem", "needs_meeting_presence", "created_at") SELECT "id", "name", "email", "phone", "message", "building_address", "management_type", "sz_status", "apartments_count", "lokali_count", "garaze_count", "year_built", "current_problems", "existing_manager_problem", "needs_meeting_presence", "created_at" FROM `leads`;--> statement-breakpoint
DROP TABLE `leads`;--> statement-breakpoint
ALTER TABLE `__new_leads` RENAME TO `leads`;--> statement-breakpoint
PRAGMA foreign_keys=ON;