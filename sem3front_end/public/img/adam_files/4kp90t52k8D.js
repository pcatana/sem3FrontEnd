if (self.CavalryLogger) { CavalryLogger.start_js(["nzut8"]); }

__d("ChatTabPolicy",["ChatBehavior","LogHistory","MercuryActionType","MercuryLogMessageType","MercuryAssert","mercuryBlockedParticipantsRe","MercuryIDs","MercuryParticipantTypes","MercurySourceType","MercuryThreadActions","MercuryThreadInfo","MercuryViewer","MessagingTag","OzConstants","PresencePrivacy","Set","ShortProfiles","WorkModeConfig","isInFocusMode"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("mercuryBlockedParticipantsRe").get(),i=c("MercuryThreadActions").get(),j=c("OzConstants").M_FBIDS,k=j.M_DEV,l=j.M,m=j.P,n=new(c("Set"))([k,l,m]),o=c("LogHistory").getInstance("tab_policy");f.exports={messageIsAllowed:function p(q,r,s){__p&&__p();var t=q.thread_id,u=r.message_id,v=c("MercuryIDs").getUserIDFromParticipantID(c("MercuryViewer").getID());c("MercuryAssert").isThreadID(t);c("MercuryAssert").isParticipantID(r.author);var w=void 0;if(c("MercuryThreadInfo").isMuted(q)){w={thread_id:t,message_id:u,mute_until:q.mute_until};o.log("message_thread_muted",JSON.stringify(w));if(!c("MercuryThreadInfo").areMentionsMuted(q)){if(!r.profile_ranges||!r.profile_ranges.some||!r.profile_ranges.some(function(y){return y.id===v})){o.log("message_mentions_viewer",JSON.stringify(w));return}}else return}if(c("isInFocusMode")(t)){w={thread_id:t,message_id:u,availability_mode:"focus"};o.log("message_thread_focus_mode",JSON.stringify(w));return}if(q.read_only){w={thread_id:t,message_id:u,mode:q.mode};o.log("message_read_only",JSON.stringify(w));return}if(r.source==c("MercurySourceType").EMAIL||r.source==c("MercurySourceType").TITAN_EMAIL_REPLY){w={thread_id:t,message_id:u,source:r.source};o.log("message_source_not_allowed",JSON.stringify(w));return}var x=c("MercuryIDs").getUserIDFromParticipantID(r.author);if(!x){o.log("message_bad_author",JSON.stringify({thread_id:t,message_id:u,user:x}));return}if(r.action_type!=c("MercuryActionType").USER_GENERATED_MESSAGE&&!this._messageIsNewlyCreatedGroup(r,q)){w={thread_id:t,message_id:u,type:r.action_type};o.log("message_non_user_generated",JSON.stringify(w));return}if(q.is_canonical_user&&!c("ChatBehavior").notifiesUserMessages()){o.log("message_jabber",JSON.stringify({thread_id:t,message_id:u}));i.markSeen(t,true);return}if(q.is_canonical&&!q.other_user_fbid){o.log("message_canonical_contact",JSON.stringify({thread_id:t,message_id:u}));return}if(q.folder!=c("MessagingTag").INBOX){o.log("message_folder",JSON.stringify({thread_id:t,message_id:u,folder:q.folder}));return}if(h.isPresentInGroupThread(q)){w={thread_id:t,message_id:u};o.log("message_blocked_participants",JSON.stringify(w));return}c("ShortProfiles").getMulti([x,v],function(y){__p&&__p();if(!c("PresencePrivacy").allows(x)){o.log("message_privacy",JSON.stringify({thread_id:t,message_id:u,user:x}));return}var z=y[x].employee&&y[v].employee,A=c("WorkModeConfig").is_work_user;if(!z&&!A&&!y[x].isCommercePage&&!n.has(x)&&y[x].type!==c("MercuryParticipantTypes").FRIEND&&y[x].type!==c("MercuryParticipantTypes").PAGE){o.log("message_non_friend",JSON.stringify({thread_id:t,message_id:u,user:x}));return}s()})},_messageIsNewlyCreatedGroup:function p(q,r){return q.action_type===c("MercuryActionType").LOG_MESSAGE&&q.log_message_type===c("MercuryLogMessageType").THREAD_NAME&&r.message_count===1}}}),null);