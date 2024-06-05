<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id1',
        'user_id2',
        'last_message_id',
    ];

    public function lastMessage()
    {
        return $this->belongsTo(Message::class, 'last_message_id');
    }

    public function user1()
    {
        return $this->belongsTo(User::class, 'last_message_id');
    }

    public function user2()
    {
        return $this->belongsTo(User::class, 'last_message_id');
    }

    public static function getConversationForSidebar(User $user)
    {

        $users = User::getUserExceptUser($user);
        $groups = Group::getGroupsforUser($user);

        return  $users->map(function (User $user) {
            return $user->toConversationArray();
        })->concat(
            $groups->map(function (Group $group) {
                return $group->toConversationArray();
            })
        );
    }

    public static function updateConversationWithMessage()
    {
    }

    public static function updateGroupWithMessage()
    {
    }
}
