#
#<?php die('Forbidden.'); ?>
#Date: 2016-03-22 15:15:52 UTC
#Software: Joomla Platform 13.1.0 Stable [ Curiosity ] 24-Apr-2013 00:00 GMT

#Fields: datetime	priority clientip	category	message
2016-03-22T15:15:52+00:00	INFO 83.60.185.204	update	Update started by user Super User (517). Old version is 3.4.8.
2016-03-22T15:15:52+00:00	INFO 83.60.185.204	update	Downloading update file from https://github.com/joomla/joomla-cms/releases/download/3.5.0/Joomla_3.5.0-Stable-Update_Package.zip.
2016-03-22T15:16:18+00:00	INFO 83.60.185.204	update	File Joomla_3.5.0-Stable-Update_Package.zip successfully downloaded.
2016-03-22T15:16:19+00:00	INFO 83.60.185.204	update	Starting installation of new version.
2016-03-22T15:17:52+00:00	INFO 83.60.185.204	update	Finalising installation.
2016-03-22T15:17:57+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-07-01. Query text: ALTER TABLE `#__session` MODIFY `session_id` varchar(191) NOT NULL DEFAULT '';.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-07-01. Query text: ALTER TABLE `#__user_keys` MODIFY `series` varchar(191) NOT NULL;.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-10-13. Query text: INSERT INTO `#__extensions` (`extension_id`, `name`, `type`, `element`, `folder`.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-10-26. Query text: ALTER TABLE `#__contentitem_tag_map` DROP INDEX `idx_tag`;.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-10-26. Query text: ALTER TABLE `#__contentitem_tag_map` DROP INDEX `idx_type`;.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-10-30. Query text: UPDATE `#__menu` SET `title` = 'com_contact_contacts' WHERE `id` = 8;.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-11-04. Query text: DELETE FROM `#__menu` WHERE `title` = 'com_messages_read' AND `client_id` = 1;.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-11-04. Query text: INSERT INTO `#__extensions` (`extension_id`, `name`, `type`, `element`, `folder`.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-11-05. Query text: INSERT INTO `#__extensions` (`extension_id`, `name`, `type`, `element`, `folder`.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2015-11-05. Query text: INSERT INTO `#__postinstall_messages` (`extension_id`, `title_key`, `description.
2016-03-22T15:17:58+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-02-26. Query text: CREATE TABLE IF NOT EXISTS `#__utf8_conversion` (   `converted` tinyint(4) NOT N.
2016-03-22T15:17:59+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-02-26. Query text: INSERT INTO `#__utf8_conversion` (`converted`) VALUES (0);.
2016-03-22T15:17:59+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-03-01. Query text: ALTER TABLE `#__redirect_links` DROP INDEX `idx_link_old`;.
2016-03-22T15:18:00+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-03-01. Query text: ALTER TABLE `#__redirect_links` MODIFY `old_url` VARCHAR(2048) NOT NULL;.
2016-03-22T15:18:01+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-03-01. Query text: ALTER TABLE `#__redirect_links` MODIFY `new_url` VARCHAR(2048) NOT NULL;.
2016-03-22T15:18:01+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-03-01. Query text: ALTER TABLE `#__redirect_links` MODIFY `referer` VARCHAR(2048) NOT NULL;.
2016-03-22T15:18:02+00:00	INFO 83.60.185.204	update	Ran query from file 3.5.0-2016-03-01. Query text: ALTER TABLE `#__redirect_links` ADD INDEX `idx_old_url` (`old_url`(100));.
2016-03-22T15:18:02+00:00	INFO 83.60.185.204	update	Deleting removed files and folders.
2016-03-22T15:18:59+00:00	INFO 83.60.185.204	update	Cleaning up after installation.
2016-03-22T15:18:59+00:00	INFO 83.60.185.204	update	Update to version 3.5.0 is complete.
