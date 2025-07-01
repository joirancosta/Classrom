-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_user_is_fkey" FOREIGN KEY ("user_is") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
