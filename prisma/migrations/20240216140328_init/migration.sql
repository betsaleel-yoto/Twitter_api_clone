-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unlike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL,

    CONSTRAINT "Unlike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unlike" ADD CONSTRAINT "Unlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unlike" ADD CONSTRAINT "Unlike_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
