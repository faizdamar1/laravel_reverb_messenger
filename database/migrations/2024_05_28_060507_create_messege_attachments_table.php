<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messege_attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('message_id')->constrained('messages');
            $table->string('name', 255);
            $table->string('path', 1024);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messege_attachments');
    }
};
