-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `email` VARCHAR(191),
    `password` VARCHAR(191),
    `phone` VARCHAR(191),
    `born_on` DATETIME(3),
    `createdAt` DATETIME(3),
    `updatedAt` DATETIME(3),


    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
