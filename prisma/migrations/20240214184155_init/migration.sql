-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);
