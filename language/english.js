//I only use google translate, so if there is an error please correct it 
exports.DelSetWel = `Success delete set welcome in this group`
exports.NoSetWel = `There is no welcome set in this group yet`
exports.DelSetLeft = `Success delete set goodbye in this group`
exports.NoSetLeft = `There is no set goodbye yet in this group`
exports.doneSet = `It's been changed before`
exports.serverErr = `Server is down!`
exports.limitLu = (m) =>{
	return`Your remaining limit : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} with key ${b} already in the database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} with key ${b} not in database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal_, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`š Name: ${username} (@${m.sender.split`@`[0]})${about ? '\nš Bio: ' + about : ''}
šØāā¤ļøāšØ Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#ļøā£ Number: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
š Link: https://wa.me/${m.sender.split`@`[0]}
š¤·āāļø XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
šļø Level: ${level}
š¢ Role: ${role}
š Limit: ${limit}
Ā®ļø Registered: ${registered ? 'ā (' + tanggal_(regTime) + ')': 'ā'}
ā½ Premium: ${premium ? `ā\nā° Expired Premium : msToDate(premiumDate - now)` : 'ā'}
š Last claim: ${lastclaim > 0 ? + tanggal_(lastclaim) : ''}`
	}

exports.needReg = (a, b, c) =>{
	return`š²šØ Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



šŗš² Please register first



Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Your limit today has run out ā ļø\n\nPlease buy a limit by typing ${prefix}buy or ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`The serial number (sn) is wrong`
	}
exports.NoseriOk = () =>{
	return`Successfully cancel registration!`
	}
exports.ExReg = (c) =>{
	return`š²šØ Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



šŗš² Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`You are already registered in the database`
	}
exports.UmurReg = () =>{
	return`Age must be a number`
	}
exports.NamaReg = () =>{
	return`Your name is really long, just use your first name`
	}
exports.HobiReg = () =>{
	return`You have a lot of hobbies, just 1 or 2 hobbies`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`ā­āć *SUCCESSFUL VERIFICATION* ć
ā\`\`\`Verification Success With\`\`\` 
ā
ā\`\`\`SN: ${a}\`\`\`
ā\`\`\`On : ${b}\`\`\`
ā\`\`\`Name : ${c}\`\`\`
ā\`\`\`Age : ${d}\`\`\`
ā\`\`\`Gender : ${e}\`\`\`
ā\`\`\`Number : @${f}\`\`\`
ā\`\`\`To use bot Please \`\`\`
ā\`\`\`Send command ${g}menu\`\`\`
ā\`\`\`or ${h}allmenu\`\`\`
ā
ā\`\`\`\Total : ${i} Users\`\`\`
ā°āāāāāāāāāāāāāāāāāāāāā`
	}
exports.genderReg = (a) =>{
	return`Select one ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`You are too old`
	}
exports.firstChat = (a, b, c) =>{
	return`Hi ${a} ${b} š¤, I am ${c} whatsapp bots. Can i help u?`
	}

exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Success Add ${q} Into Database ${a}\n\nCheck with command ${prefix}${b}`
	}

exports.Addvn = () =>{
	return`Wait a minute, I will try to upload this media to the database`
	}

exports.AddstikOk_ = (a, b) =>{
	return`The duration is ${a} seconds, which is the maximum ${b} duration that bots can save into the database`
	}

exports.ListStik = (a) =>{
	return`_To take ${a} please send a message according to the list of ${a} the one above_`
	}


exports.noAbsen = () =>{
return `ā No absences take place in this group!`
}
exports.StartAbsen = () =>{
	return`Start Absence`
	}
exports.DahAbsen = () =>{
	return`You're absent`
	}
exports.DelAbsen = () =>{
	return`ā Successfully deleted absences in this group`
	}
exports.adaAbsen = () =>{
	return`There are still absent sessions in this group!`
	}
exports.SAbsen = () =>{
	return`Absence begins`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Must be accompanied by a Prefix!!*`
	}
exports.CmdApa = () =>{
	return`For What Command?`
	}
exports.UCmd = () =>{
	return`You don't have permission to modify this sticker order`
	}
exports.HashCmd = () =>{
	return`No hashes`
	}
exports.DelCmd = () =>{
	return`ā The cmd sticker has been removed`
	}
exports.LockCmd = () =>{
	return`Reply message`
	}
exports.NoCmd = () =>{
	return`Hash not found in database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message You Want To Save In Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Example : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' has been registered in the message list`
}
exports.DoneMsg = (prefix, text) => {
    return `Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' not listed in the message list`
}
exports.DelMsg = (text) => {
    return `Delete successfully '${text}' from the message list`
}

exports.OnBef = () => {
    return `It's been activated before`
}
exports.OffYaBef = () => {
    return `It's been deactivated before`
}
exports.OkOn = (command) => {
    return `${command} Successfully Activated !`
}
exports.OffBef = (command) => {
    return `${command} Successfully Deactivated !`
}
exports.OkMute = () => {
    return `Bot has been muted in this group`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send command ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `This question is not finished!`
}
exports.NoWm = (prefix, command) => {
    return `Send command ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send command ${prefix + command} *teks*\n\nExample : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send command ${prefix + command} *teks 1|teks 2*\n\nExample : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Example : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Example : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Example : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Example: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Example: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Example: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Example : ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Usage examples: \n${prefix + command} ${style2}\n\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Example : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Example : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `ā Wrong answer`
}

exports.JwbTrue = (tebak, exp) => {
return`š® ${tebak} š®\n\nCorrect answer š\n+${exp} XP`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Please Answer The Question Above\n\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `The picture above is a picture of the district?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send command ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send command ${prefix + command} *language code* *teks*
	ā¢ Example : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	ā¢ Example : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${key}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session, press the button to find a partner `
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `ā Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `ā ļø This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `ļø You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found š¼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `š Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `ā ļø You've never started a chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Reply to the audio you want to change with caption *${prefix + command}*`
}
exports.NoTagBan = () => {
    return `Usage examples :\n${prefix + command} 62938828728992 \nor\n${prefix + command} @tagmember`
}

exports.getBan = (a) => {
    return `ā ļø Sorry, your number has been banned by the owner\n\nOwner š\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} with caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}

exports.AllFitur = () => {
    return `\nAll bot features`
}
exports.InfoMenu = () => {
    return `\n_Looking for the latest information via bot_`
}
exports.KhususOwn = () => {
    return `\n_Owner Bots Special Features_`
}
exports.DataBor = () => {
    return `\n_Storing something in the bot database_`
}
exports.MenuGc = () => {
    return `\n_Show group specific features_`
}
exports.MenuAni = () => {
    return `\n_Looking for random anime pictures_`
}
exports.TagMem = () => {
    return `\n_Tag group member_`
}
exports.StalkOrk = () => {
    return `\n_People's social media stalking_`
}
exports.Hoja = () => {
    return `\n_Looking for something unimportant_`
}
exports.CovertWi = () => {
    return `\n_Convert something with bot_`
}
exports.AnuFoto = () => {
    return `\n_Change the picture to be more interesting_`
}
exports.HajuStik = () => {
    return `\n_Create unique stickers_`
}
exports.EloDown= () => {
    return `\n_Show download feature_`
}
exports.StikerWibu = () => {
    return `\n_Random anime stickers_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_To create a logo using a bot_`
}
exports.oterMenu = () => {
    return `\n_More menu_`
}
exports.GameBot = () => {
    return `\n_Features for playing with bots_`
}
exports.RandRik = () => {
    return `\n_Random tiktok videos_`
}
exports.RandCew = () => {
    return `\n_Random pictures of beautiful girls_`
}
exports.RamalOi = () => {
    return `\n_Today's forecast_`
}
exports.TeleStik= () => {
    return `\n_Random sticker from telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Create cool logos with bots_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Make an attractive logo_`
}
exports.TobatBro = () => {
    return `\n_Islamic features_`
}
exports.MauJualan = () => {
    return `\n_Features for selling_`
}
exports.Maustorage = () => {
    return `\n_Features to save stickers, audio, photos and videos_`
}
exports.MauChanger = () => {
    return `\n_Feature to change audio/vn sound_`
}
exports.GadaChat = () => {
    return `\n_Features for random chat_`
}
exports.SumberBot = () => {
    return `\n_Source of this bot script_`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `ā³ Please wait a moment`
}
exports.ok = () => {
    return `ā Done.`
}

exports.err = () => {
    return `ā ļø Error Moderate Features`
}
exports.erorLink = () => {
    return `ā ļø The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `ā Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `ā Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `ā This command is for the owner`
}

exports.doneOwner = () => {
    return `ā  ļøIt's done, Owner ~`
}

exports.groupOnly = () => {
    return `š„  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `š  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*āā ć HALL OF SHAME ć āā*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `ā User is not an admin! ā`
}

exports.adminAlready = () => {
    return `ā Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hi bro ${pushname} š good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*āTime Server : ${time}*
*š List-Menu :*

ā­āā ć Bot Info ć 
āā !owner
āā !rules
āā !sc
āā !ping
āā !runtime
āā !botstatus
ā°ā !donate


ā­āā ć Owner ć 
āā !setmenu [query]
āā !setmenu katalog
āā !setmenu katalog2
āā !setmenu list
āā !setwm packname|author
āā !sendsesi
āā !listpc
āā !listgc
āā !broadcast [text]
āā !bc [text]
āā !bcgc 
āā !bcimage
āā !bcaudio
āā !bcstiker
āā !bcvn
āā !bcvideo
āā !banuser
āā !unban
āā !banned
āā !listbanned
āā !block
āā !ublock
āā !listblock
āā !addpremium
āā !delpremium
āā !listpremium
āā !nsfw [on/off]
āā !mute [on/off]
āā !autoblok212 [on/off]
āā !banchat
āā !unbanchat
āā !autorespond [on/off]
āā !antiviewonce [on/off]
āā !antidelete [on/off]
āā !autobio [on/off]
āā !anticall [on/off]
āā !join [link]
āā !self
āā !public [only bot]
āā !del [reply pesan bot]
āā !pppanjang
āā !setpppanjang
ā°ā !setppbot [reply image]

ā­āā ć Store Menu ć
āā !list
āā !addlist [key|respond]
āā !dellist [key]
āā !update [key|respond]
āā !store
āā !kali
āā !bagi
āā !tambah
āā !kurang
āā !kalkulator
āā !setproses
āā !updateproses
āā !cekproses
āā !delproses
āā !setdone
āā !updatedone
āā !cekdone
āā !deldone
āā !pay
āā !setcaptionpay
āā !setpaysewa
āā !proses
ā°ā !done

ā­āā ć Anonymous ć
āā !menfess
āā !confess
āā !balasmenfess
āā !tolakmenfess
āā !stopmenfess
āā !anonymous 
āā !start
āā !skip [daerah]
ā°ā !stop [surah|ayat]


ā­āā ć Database ć 
āā !setcmd [reply stiker]
āā !delcmd [reply stiker]
āā !listcmd
āā !absen
āā !cekabsen
āā !deleteabsen
āā !absenstart
āā !addmsg [nama file]
āā !getmsg [nama file]
āā !listmsg
ā°ā !delmsg [nama file]

ā­āā ć Rpg Games ć
āā !adventure
āā !weekly
āā !use
āā !transfer
āā !slot
āā !shop
āā !pasar
āā !profile
āā !ojek
āā !open
āā !nguli
āā !narik
āā !nabung
āā !monthly
āā !mining
āā !merampok
āā !mancing
āā !kolam
āā !koboy
āā !kerja
āā !kandang
āā !judi
āā !inventory
āā !hourly
āā !fishop
āā !feed
āā !duel
āā !daily
āā !craft
āā !cooldown
āā !cook
āā !collect
āā !chop
āā !casino
āā !buy
āā !bank 
āā !bansos
āā !berdagang
āā !berkebon
ā°ā !build


ā­āā ć Group ć 
āā !addsewa
āā !delsewa
āā !listsewa
āā !ceksewa
āā !delsewa
āā !register
āā !unregister
āā !ceksn
āā !listonline
āā !sider
āā !wm packname|author
āā !infochat
āā !setdesk [text]
āā !setppgrup [reply image]
āā !pppanjanggc
āā !setpppanjanggc
āā !revoke
āā !leave
āā !add [62***]
āā !kick @tag
āā !leave
āā !linkgc
āā !welcome [on/off]
āā !goodbye [on/off]
āā !demotedetect [on/off]
āā !promotedetect  [on/off]
āā !setwelcome
āā !updatewelcome
āā !delwelcome
āā !cekwelcome
āā !setgoodbye
āā !updategoodbye
āā !delgoodbye
āā !cekgoodbye
āā !setpromote
āā !updatepromote
āā !setdemote
āā !updatedemote
āā !cekpromote
āā !cekdemote
āā !delpromote
āā !deldemote
āā !nsfw [on/off]
āā !antilink [on/off]
āā !antiwame [on/off]
āā !take packname|author
āā !group [open/close]
āā !tagall [text]
ā°ā !hidetag [text]

ā­āā ć Anime ć 
āā !jadiwibu
āā !towibu
āā !toanime
āā !jadianime
āā !quotesanime
āā !anime [query]
āā !animeinfo
āā !manga [query]
ā°ā !character [query]

ā­āā ć Tag ć 
āā !stickertag
āā !videotag [query]
āā !vntag [query]
ā°ā !imagetag [query]

ā­āā ć Stalking ć
āā !mlstalk [id|zona id]
āā !ffstalk [id]
āā !igstalk [username]
āā !ghstalk [username]
ā°ā !ytstalk [channel]


ā­āā ć Search ć 
āā !ytsearch [query]
āā !openai [query]
āā !chatgpt [query]
āā !githubsearch [query]
āā !kbbi [query]
āā !lirik [query]
āā !wallpaper [query]
āā !google [query]
āā !wikimedia [query]
āā !apksearch
āā !findapk
āā !hentai
āā !wattpad [query]
āā !webtoons [query]
āā !brainly [query]
ā°ā !pinterest [query]


ā­āā ć Converter ć
āā !emoji [š­]
āā !emojimix [š­+š©]
āā !toaudio [video]
āā !tomp3 [video]
āā !tovn [video]
āā !stiker [reply image]
āā !tourl [image/video/stiker]
āā !togif [sticker]
āā !tomp4 [sticker]
ā°ā${prefix}toimg [reply sticker]


ā­āā ć Image Effect ć 
āā !wanted [reply image/stiker]
āā !utatoo [reply image/stiker]
āā !unsharpen [reply image/stiker]
āā !thanos [reply image/stiker]
āā !sniper [reply image/stiker]
āā !sharpen [reply image/stiker]
āā !sepia [reply image/stiker]
āā !scary [reply image/stiker]
āā !rip [reply image/stiker]
āā !redple [reply image/stiker]
āā !rejected [reply image/stiker]
āā !posterize [reply image/stiker]
āā !ps4 [reply image/stiker]
āā !pixelize [reply image/stiker]
āā !missionpassed [reply image/stiker]
āā !moustache [reply image/stiker]
āā !lookwhatkarenhave [reply image/stiker]
āā !jail [reply image/stiker]
āā !invert [reply image/stiker]
āā !instagram [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !glitch2 [reply image/stiker]
āā !gay [reply image/stiker]
āā !frame [reply image/stiker]
āā !fire [reply image/stiker]
āā !distort [reply image/stiker]
āā !dictator [reply image/stiker]
āā !deepfry [reply image/stiker]
āā !ddungeon [reply image/stiker]
āā !circle [reply image/stiker]
āā !challenger [reply image/stiker]
āā !burn [reply image/stiker]
āā !brazzers [reply image/stiker]
ā°ā !beautiful [reply image/stiker]


ā­āā ć Sticker Effect ć 
āā !jail [reply image/stiker]
āā !red [reply image/stiker]
āā !gay [reply image/stiker]
āā !bloo [reply image/stiker]
āā !blue [reply image/stiker]
āā !sepia [reply image/stiker]
āā !green [reply image/stiker]
āā !glass [reply image/stiker]
āā !invert [reply image/stiker]
āā !blurple [reply image/stiker]
āā !blurple2 [reply image/stiker]
āā !wasted [reply image/stiker]
āā !passed [reply image/stiker]
āā !triggered [reply image/stiker]
āā !comrade [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !threshold [reply image/stiker]
āā !brightness [reply image/stiker]
ā°ā !invertgreyscale [reply image/stiker]


ā­āā ć Download ć 
āā !tiktok [link]
āā !tiktoknowm [link]
āā !tiktokwm [link]
āā !tiktokaudio [link]
āā !ytdl [link]
āā !play [query]
āā !ytmp3 [link]
āā !ytshortmp3 [link]
āā !ytmp4 [link]
āā !ytshorts [link]
āā !facebook [link]
āā !facebooksd [link]
āā !facebookhd [link]
āā !fbaudio [link]
āā !igstory [username]
āā !igdl [link]
āā !igphoto [link]
āā !igvideo [link]
āā !igreels [link]
āā !igtv [link]
āā !soundcloud [link]
āā !gitclone [link repo]
āā !gitrepo [username repo branch]
āā !mediafire [link]
āā !nhentaipdf [id]
ā°ā !twitter link

ā­āā ć Primbon ć
āā !nomorhoki 887435047326
āā !artimimpi [query]
āā !artinama [query]
āā !ramaljodoh
āā !ramaljodohbali
āā !suamiistri
āā !ramalcinta
āā !cocoknama
āā !pasangan
āā !jadiannikah
āā !sifatusaha
āā !rezeki
āā !pekerjaan
āā !nasib
āā !penyakit
āā !tarot
āā !fengshui
āā !haribaik
āā !harisangar
āā !harisial
āā !nagahari
āā !arahrezeki
āā !peruntungan
āā !weton
āā !karakter
āā !keberuntungan
āā !memancing
āā !masasubur
āā !zodiak 
ā°ā !shio [query]

ā­āā ć Random Anime ć
āā !loli
āā !neko
āā !waifu
āā !shinobu
āā !megumin
āā !bully
āā !cuddle
āā !cry
āā !hug
āā !awoo
āā !kiss
āā !lick
āā !pat
āā !smug
āā !bonk
āā !yeet
āā !blush
āā !smile
āā !wave
āā !highfive
āā !handhold
āā !nom
āā !bite
āā !glomp
āā !slap
āā !kill
āā !happy
āā !wink
āā !poke
āā !dance
ā°ā !cringe

ā­āā ć Voice Change Menu ć
āā !bass
āā !blown
āā !deep
āā !earrape
āā !fast
āā !fat
āā !nightcore
āā !reverse
āā !robot
āā !slow
āā !smooth
ā°ā !tupai

ā­āā ć Storage Menu ć
āā !addvn
āā !listvn
āā !delvn
āā !adddocument
āā !listdocument
āā !deldocument
āā !addtext
āā !listtext
āā !deltext
āā !addaudio
āā !listaudio
āā !delaudio
āā !addimage
āā !listimage
āā !delimage
āā !addvideo
āā !listvideo
āā !delvideo
āā !addstik
āā !delstik
ā°ā !liststik

ā­āā ć Nsfw & Sfw ć
āā !cuddle
āā !feed
āā !foxgirl
āā !kemonomimi2
āā !woof
āā !holo2
āā !hug
āā !kiss
āā !lizard
āā !meowi
āā !neko2
āā !pat
āā !poke
āā !slap
āā !tickle
āā !baka
āā !smug
āā !neko-sfw
āā !hentai
āā !hentai-gif
āā !spank
āā !blowjob
āā !cumarts
āā !eroyuri
āā !eroneko
āā !erokemonomimi
āā !erokitsune
āā !ero
āā !feet
āā !erofeet
āā !feetgif
āā !femdom
āā !futanari
āā !hentai
āā !holoero
āā !holo
āā !keta
āā !kitsune
āā !kemonomimi
āā !pussyart
āā !pussywankgif
āā !girl-solo
āā !girl-solo-gif
āā !tits
āā !trap
āā !yuri
āā !avatar2
āā !anal
āā !bj
āā !boobs
āā !classic
āā !cumsluts
āā !kuni
āā !lesbian
āā !neko
āā !neko-gif
āā !ahegao
āā !bdsm
āā !cuckold
āā !cum
āā !foot
āā !gangbang
āā !glasses
āā !jahy
āā !masturbation
āā !nsfw-neko
āā !orgy
āā !panties
āā !tentacles
āā !thighs
ā°ā !zettai

ā­āā ć Ephoto360 Menu ć
āā !youtubegold
āā !youtubesilver
āā !facebookgold
āā !facebooksilver
āā !instagramgold
āā !instagramsilver
āā !twittergold
āā !twittersilver
āā !retrotext
āā !halloweenbats
āā !texthalloween
āā !cardhalloween
āā !birthdaycake
āā !thundertext
āā !icetext
āā !milkcake
āā !snowontext
āā !metalstar
āā !dragonfire
āā !zombie3d
āā !merrycard
āā !generalexam 
āā !viettel
āā !embroider
āā !graffititext
āā !graffititext2
āā !graffititext3
āā !covergraffiti
āā !moderngold
āā !capercut
āā !lovecard
āā !heartflashlight
āā !heartcup
āā !sunglightshadow
āā !graffiti3d
āā !moderngoldsilver
āā !moderngold2
āā !moderngold3
āā !fabrictext
āā !masteryavatar
āā !messagecoffee
āā !announofwin
āā !writeblood
āā !horrorletter
āā !writehorror
āā !shirtclub
āā !angelwing
āā !christmasseason
āā !projectyasuo
āā !lovelycute
āā !womansday
āā !covergamepubg
āā !nameonheart
āā !funnyhalloween
āā !lightningpubg
āā !greetingcardvideo 
āā !christmascard 
āā !galaxybat
āā !writegalaxy
āā !starsnight
āā !noeltext
āā !textcakes
āā !pubgbirthday
āā !galaxywallpaper
āā !pubgglicthvideo 
āā !pubgmascotlogo
āā !realembroidery
āā !vintagetelevision
āā !funnyanimations
āā !glowingtext
āā !textonglass
āā !cartoonstyle
āā !multicolor
āā !watercolor2
āā !textsky
āā !summerbeach
āā !1917text
āā !puppycute
ā°ā !rosebirthday


ā­āā ć Textpro Menu ć
āā !halloween2 text|text2
āā !horror text|text2
āā !game8bit text|text2
āā !layered text|text2
āā !glitch2 text|text2
āā !cool-graffiti text|text2
āā !cool-wall-graffiti text|text2
āā !realistic text|text2
āā !space3d text|text2
āā !glitch-tiktok text|text2
āā !stone text|text2
āā !marvel text|text2
āā !marvel2 text|text2
āā !pornhub text|text2
āā !avengers text|text2
āā !metal-rainbow text|text2
āā !metal-gold text|text2
āā !metal-galaxy text|text2
āā !halloween2 text|text2
āā !lion text|text2
āā !wolf-black-white text|text2
āā !wolf-galaxy text|text2
āā !ninja text|text2
āā !3dsteel text|text2
āā !horror2 text|text2
āā !lava text|text2
āā !bagel text|text2
āā !blackpink text
āā !rainbow2 text
āā !water-pipe text
āā !halloween text
āā !sketch text
āā !sircuit text
āā !discovery text
āā !metallic2 text
āā !fiction text
āā !demon text
āā !transformer text
āā !berry text
āā !thunder text
āā !magma text
āā !3dstone text
āā !neon text
āā !glitch text
āā !harry-potter text
āā !embossed text
āā !broken text
āā !papercut text
āā !gradient text
āā !glossy text
āā !watercolor text
āā !multicolor text
āā !neon-devil text
āā !underwater text
āā !bear text
āā !wonderful-graffiti text
āā !christmas text
āā !neon-light text
āā !snow text
āā !cloudsky text
āā !luxury2 text
āā !gradient2 text
āā !summer text
āā !writing text
āā !engraved text
āā !summery text
āā !3dglue text
āā !metaldark text
āā !neonlight text
āā !oscar text
āā !minion text
āā !holographic text
āā !purple text
āā !glossy-blue text
āā !deluxe-gold text
āā !glossy-carbon text
āā !fabric text
āā !neonc text
āā !newyear text
āā !newyear2 text
āā !metal-silver text
āā !xmas text
āā !blood text
āā !dark-gold text
āā !joker text
āā !wicker text
āā !natural text
āā !firework text
āā !skeleton text
āā !red-balloon text
āā !purple-balloon text
āā !pink-balloon text
āā !green-balloon text
āā !cyan-balloon text
āā !blue-balloon text
āā !gold-balloon text
āā !steel text
āā !gloss text
āā !denim text
āā !decorate text
āā !decorate-purple text
āā !peridot text
āā !rock text
āā !yellow-glass text
āā !purple-glass text
āā !orange-glass text
āā !green-glass text
āā !cyan-glass text
āā !blue-glass text
āā !red-glass text
āā !purple-shiny-glass text
āā !captain-as2 text
āā !robot text
āā !equalizer text
āā !toxic text
āā !pink-sparkling text
āā !blue-sparkling text
āā !green-sparkling text
āā !purple-sparkling text
āā !gold-sparkling text
āā !red-sparkling text
āā !cyan-sparkling text
āā !decorative text
āā !chocolate text
āā !strawberry text
āā !koifish text
āā !bread text
āā !matrix text
āā !blood2 text
āā !neonligth2 text
āā !thunder2 text
āā !3dbox text
āā !neon2 text
āā !road-warning text
āā !bokeh text
āā !green-neon text
āā !advanced text
āā !dropwater text
āā !wall text
āā !chrismast text
āā !honey2 text
āā !drug text
āā !marble text
āā !marble2 text
āā !ice text
āā !juice text
āā !rusty text
āā !abstra text
āā !biscuit text
āā !wood text
āā !scifi text
āā !metal-rainbow text
āā !metal-rose-gold text
āā !purple-gem text
āā !shiny text 
āā !yellow-jewelry text
āā !silver-jewelry text
āā !red-jewelry text
āā !purple-jewelry text
āā !orange-jewelry text
āā !green-jewelry text
āā !cyan-jewelry text
āā !blue-jewelry text
āā !hot-metal text
āā !golden text
āā !blue-glitter text
āā !purple-glitter text
āā !pink-glitter text
āā !green-glitter text
āā !silver-glitter text
āā !gold-glitter text
āā !bronze-glitter text
āā !eroded-metal text
āā !carbon text
āā !candy text
āā !blue-metal text
āā !blue-gem text
āā !3dchrome text
āā !black-metal text
ā°ā !metal-gold text


ā­āā ć Others ć
āā !afk [reason]
āā !translate kode_bahasa text
āā !kalkulator [query]
āā !smeme [text]
āā !smeme2 [text|text]
āā !memegen [text|text]
ā°ā

ā­āā ć Game Menu ć
āā !tembak
āā !tolak
āā !terima
āā !putusin
āā !ikhlasin
āā !cekpacar
āā !kuismath
āā !tebakgambar
āā !tebakkata
āā !tebakbendera
āā !tebakkalimat
āā !tebaksiapa
āā !tebakkabupaten
āā !tebakkimia
āā !tebaklirik
āā !tebaktebakan
āā !tekateki
āā !susunkata
ā°ā !caklontong


ā­āā ć Asupan Menu ć
āā !chika
āā !delvira
āā !ayu
āā !bunga
āā !aura
āā !nisa
āā !ziva
āā !yana
āā !viona
āā !syania
āā !riri
āā !syifa
āā !mama_gina
āā !alcakenya
āā !mangayutri
āā !rikagusriani
āā !asupan
āā !bocil
āā !geayubi
āā !santuy
āā !ukhty
ā°ā !syifa

ā­āā ć Telegram Sticker ć
āā !awoawo
āā !benedict
āā !chat
āā !dbfly
āā !dino_kuning
āā !doge
āā !gojosatoru
āā !hope_boy
āā !jisoo
āā !kr_robot
āā !kucing
āā !lonte
āā !manusia_lidi
āā !menjamet
āā !meow
āā !nicholas
āā !patrick
āā !popoci
āā !sponsbob
āā !kawan_sponsbob
ā°ā !tyni

ā­āā ć Random Cewe ć
āā !china 
āā !indonesia 
āā !malaysia 
āā !thailand 
āā !korea 
āā !japan 
āā !vietnam 
āā !jenni 
āā !jiso 
āā !lisa  
ā°ā !rose

ā­āā ć Logo Menu ć
āā !coverbannerlol text|heroes
āā !pubglogomaker text|style
āā !colorfulpubg text|color
āā !astronotspace text|style
āā !wallpaperaov text|heroes
āā !maketeamlogo text|style
āā !circlemarcotteam text|logo
āā !wallpaperml text|heroes
āā !dragonballfb text|character
āā !bannerofaov text|character
āā !effect3donbeach text|background
āā !cutegirlgamer text|logo
āā !footballteam text|logo
āā !beautifulshimmering text|champion
āā !pubgcutelogo text|logo
āā !elegantrotation text|logo
āā !logogamingassasin text|logo
āā !introvideomaker text|logo
āā !gaminglogo4fvs text|logo
āā !blueneon text|logo
āā !metalmascot text|logo
āā !anonymous2 text|style
āā !lolpentakill text|style
āā !avatarleagueofking text|style
āā !avatarff text|character
āā !overwatchwallpaper text|character
āā !rovwallpaperhd text|hero
āā !rovwallpaper text|avatar
āā !beautifulgalaxylol text|style
āā !crossfirecover text|character
āā !lolwallpaper text|wallpaper
āā !coverdota2 text|heroes
āā !coverleagueofking text|character
āā !avatar3q360 text|avatar
āā !coverofwarface text|character
āā !newlolavatar text|avatar
āā !csgocover text|background
āā !coverloknew text|hero
āā !coverfblol text|letters
āā !overwatchcover text|hero
āā !crossfirestyle text|avatar
āā !avatarlolbyname text|style
āā !lolcoverbyname text|avatar
āā !cyberhunterfb text|character
āā !coverfreefirefb text|character
āā !gamingmascot text|style
āā !coveronepiecefb text|character
āā !bannerytcsgo text|banner
āā !fbgamepubgcover text|template
āā !banneroflol text|text2|banner
āā !bannerofaov2 text|text2|banner
āā !teamlogo text|text2|background
āā !companylogo2 text|text2|background
āā !companylogo text|text2|background
āā !gradientlogo text|text2|background
āā !pencilsketch text|text2|icon
āā !gunlogogaming text|text2|background
āā !banneroffreefire text|text2|background
āā !letterlogos text|text2|thumb
āā !bannerofoverwatch text|text2|background
āā !bannerofapex text|text2|background
āā !bannerofpubg text|text2|background
āā !mascotstyle text|text2|thumb
āā !logoaccording text|text2|thumb
ā°ā !avataroverwatch text|text2|thumb


ā­āā ć Islamic Menu ć
āā !asmaulhusna
āā !kisahnabi [nabi]
āā !jadwalshalat [daerah]
āā !randomquran
āā !randomquran2
āā !listsurah
āā !tafsirsurah [surah]
ā°ā !alquranaudio [surah|ayat]

ā­āā ć Sound Menu ć
āā !sound1
āā !sound2
āā !sound3
āā !sound4
āā !sound5
āā !sound6
āā !sound7
āā !sound8
āā !sound9
āā !sound10
āā !sound11
āā !sound12
āā !sound13
āā !sound14
āā !sound15
āā !sound16
āā !sound17
āā !sound18 
āā !sound19
āā !sound20
āā !sound21
āā !sound22
āā !sound23
āā !sound24
āā !sound25
āā !sound26
āā !sound27
āā !sound28
āā !sound29
āā !sound30
āā !sound31
āā !sound32
āā !sound33
āā !sound34
āā !sound35
āā !sound36
āā !sound37
āā !sound38
āā !sound39
āā !sound40
āā !sound41
āā !sound42
āā !sound43
āā !sound44
āā !sound45
āā !sound46
āā !sound47
āā !sound48
āā !sound49
āā !sound50
āā !sound51
āā !sound52
āā !sound53
āā !sound54
āā !sound55
āā !sound56
āā !sound57
āā !sound58
āā !sound59
āā !sound60
āā !sound61
āā !sound62
āā !sound63
āā !sound64
āā !sound65
āā !sound66
āā !sound67
āā !sound68
āā !sound69
ā°ā !sound70

ā­āā ć TqTo ć 
āā My God
āā My Parents
āā Fatih A.
āā Ferdi
āā DikaArdnt
āā Mhankbarbar
āā Nurutomo
āā Rashid
āā ZeeoneOfc
āā Penyedia Module
ā°ā And All Support
    `
}

exports.rules = (prefix) => {
    return `
*āā ć RULES AND FAQ ć āā*

1. Jangan spam bot. š
2. Jangan telepon bot. āļø
3. Jangan membandingkan bot š

šÆļø Bot tidak atau lambat merespon ?
ā”ļø Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

šÆļø Dimana saya bisa mendapatkan Script dari bot ini ?
ā”ļø Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

šÆļø Boleh saya menambah ke grup?
ā”ļø Untuk itu tergantung dari owner bot sendiri

šÆļø Prefixnya apa ya?
ā”ļø Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

ā ļø Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`š©šŗšššŗš ššššŗ ššššš ššŗš š¤
	
ā­ š­šŗššŗ :
āā š“ššš :
āā š¦š¾šš½š¾š :
āā š šššš :
ā°ā šÆšŗšššš šššš¾š šššš ššŗ ššŗk ~`
}
exports.leave = () =>{
	return`Yah kok out š£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ć SOURCE CODE ć ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------ć DONATE ć -------*

Hi bro āŗļø 
You can support me to keep this bot up to date by donating

Any amount of your donation will be very meaningful š
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`ā­āā ć Bot Info ć 
āā !owner
āā !rules
āā !sc
āā !ping
āā !runtime
āā !botstatus
ā°ā !donate
`}

exports.ownermenu = (prefix) =>{
return`ā­āā ć Owner ć 
āā !setmenu [query]
āā !setmenu katalog
āā !setmenu katalog2
āā !setmenu list
āā !setwm packname|author
āā !sendsesi
āā !listpc
āā !listgc
āā !broadcast [text]
āā !bc [text]
āā !bcgc 
āā !bcimage
āā !bcaudio
āā !bcstiker
āā !bcvn
āā !bcvideo
āā !banuser
āā !unban
āā !banned
āā !listbanned
āā !block
āā !ublock
āā !listblock
āā !addpremium
āā !delpremium
āā !listpremium
āā !nsfw [on/off]
āā !mute [on/off]
āā !autoblok212 [on/off]
āā !banchat
āā !unbanchat
āā !autorespond [on/off]
āā !antiviewonce [on/off]
āā !antidelete [on/off]
āā !autobio [on/off]
āā !anticall [on/off]
āā !join [link]
āā !self
āā !public [only bot]
āā !del [reply pesan bot]
āā !pppanjang
āā !setpppanjang
ā°ā !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`ā­āā ć Database ć 
āā !setcmd [reply stiker]
āā !delcmd [reply stiker]
āā !listcmd
āā !absen
āā !cekabsen
āā !deleteabsen
āā !absenstart
āā !addmsg [nama file]
āā !getmsg [nama file]
āā !listmsg
ā°ā !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`ā­āā ć Group ć 
āā !addsewa
āā !delsewa
āā !listsewa
āā !ceksewa
āā !delsewa
āā !register
āā !unregister
āā !ceksn
āā !listonline
āā !sider
āā !wm packname|author
āā !infochat
āā !setdesk [text]
āā !setppgrup [reply image]
āā !pppanjanggc
āā !setpppanjanggc
āā !revoke
āā !leave
āā !add [62***]
āā !kick @tag
āā !leave
āā !linkgc
āā !welcome [on/off]
āā !goodbye [on/off]
āā !demotedetect [on/off]
āā !promotedetect  [on/off]
āā !setwelcome
āā !updatewelcome
āā !delwelcome
āā !cekwelcome
āā !setgoodbye
āā !updategoodbye
āā !delgoodbye
āā !cekgoodbye
āā !setpromote
āā !updatepromote
āā !setdemote
āā !updatedemote
āā !cekpromote
āā !cekdemote
āā !delpromote
āā !deldemote
āā !nsfw [on/off]
āā !antilink [on/off]
āā !antiwame [on/off]
āā !take packname|author
āā !group [open/close]
āā !tagall [text]
ā°ā !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`ā­āā ć Anime ć 
āā !jadiwibu
āā !towibu
āā !toanime
āā !jadianime
āā !quotesanime
āā !anime [query]
āā !animeinfo
āā !manga [query]
ā°ā !character [query]
`}

exports.tag = (prefix) =>{
	return`ā­āā ć Tag ć 
āā !stickertag
āā !videotag [query]
āā !vntag [query]
ā°ā !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`ā­āā ć Stalking ć 
āā !mlstalk [id|zona id]
āā !ffstalk [id]
āā !igstalk [username]
āā !ghstalk [username]
ā°ā !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`ā­āā ć Search ć 
āā !ytsearch [query]
āā !openai [query]
āā !chatgpt [query]
āā !githubsearch [query]
āā !kbbi [query]
āā !lirik [query]
āā !wallpaper [query]
āā !google [query]
āā !wikimedia [query]
āā !apksearch
āā !findapk
āā !hentai
āā !wattpad [query]
āā !webtoons [query]
āā !brainly [query]
ā°ā !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`ā­āā ć Converter ć 
āā !emoji [š­]
āā !emojimix [š­+š©]
āā !toaudio [video]
āā !tomp3 [video]
āā !tovn [video]
āā !stiker [reply image]
āā !tourl [image/video]
āā !togif [sticker]
āā !tomp4 [sticker]
ā°ā${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`ā­āā ć Image Effect ć 
āā !wanted [reply image/stiker]
āā !utatoo [reply image/stiker]
āā !unsharpen [reply image/stiker]
āā !thanos [reply image/stiker]
āā !sniper [reply image/stiker]
āā !sharpen [reply image/stiker]
āā !sepia [reply image/stiker]
āā !scary [reply image/stiker]
āā !rip [reply image/stiker]
āā !redple [reply image/stiker]
āā !rejected [reply image/stiker]
āā !posterize [reply image/stiker]
āā !ps4 [reply image/stiker]
āā !pixelize [reply image/stiker]
āā !missionpassed [reply image/stiker]
āā !moustache [reply image/stiker]
āā !lookwhatkarenhave [reply image/stiker]
āā !jail [reply image/stiker]
āā !invert [reply image/stiker]
āā !instagram [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !glitch [reply image/stiker]
āā !gay [reply image/stiker]
āā !frame [reply image/stiker]
āā !fire [reply image/stiker]
āā !distort [reply image/stiker]
āā !dictator [reply image/stiker]
āā !deepfry [reply image/stiker]
āā !ddungeon [reply image/stiker]
āā !circle [reply image/stiker]
āā !challenger [reply image/stiker]
āā !burn [reply image/stiker]
āā !brazzers [reply image/stiker]
ā°ā !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`ā­āā ć Sticker Effect ć 
āā !jail [reply image/stiker]
āā !red [reply image/stiker]
āā !gay [reply image/stiker]
āā !bloo [reply image/stiker]
āā !blue [reply image/stiker]
āā !sepia [reply image/stiker]
āā !green [reply image/stiker]
āā !glass [reply image/stiker]
āā !invert [reply image/stiker]
āā !blurple [reply image/stiker]
āā !blurple2 [reply image/stiker]
āā !wasted [reply image/stiker]
āā !passed [reply image/stiker]
āā !triggered [reply image/stiker]
āā !comrade [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !threshold [reply image/stiker]
āā !brightness [reply image/stiker]
ā°ā !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`ā­āā ć Download ć 
āā !tiktok [link]
āā !tiktoknowm [link]
āā !tiktokwm [link]
āā !tiktokaudio [link]
āā !ytdl [link]
āā !play [query]
āā !ytmp3 [link]
āā !ytshortmp3 [link]
āā !ytmp4 [link]
āā !ytshorts [link]
āā !facebook [link]
āā !facebooksd [link]
āā !facebookhd [link]
āā !fbaudio [link]
āā !igstory [username]
āā !igdl [link]
āā !igphoto [link]
āā !igvideo [link]
āā !igreels [link]
āā !igtv [link]
āā !soundcloud [link]
āā !gitclone [link repo]
āā !gitrepo [username repo branch]
āā !mediafire [link]
āā !nhentaipdf [id]
ā°ā !twitter link
`
}

exports.ranime = (prefix) =>{
	return`ā­āā ć Random Anime ć
āā !loli
āā !neko
āā !waifu
āā !shinobu
āā !megumin
āā !bully
āā !cuddle
āā !cry
āā !hug
āā !awoo
āā !kiss
āā !lick
āā !pat
āā !smug
āā !bonk
āā !yeet
āā !blush
āā !smile
āā !wave
āā !highfive
āā !handhold
āā !nom
āā !bite
āā !glomp
āā !slap
āā !kill
āā !happy
āā !wink
āā !poke
āā !dance
ā°ā !cringe
`
}

exports.nsfw = (prefix) =>{
	return`ā­āā ć Nsfw & Sfw ć
āā !cuddle
āā !feed
āā !foxgirl
āā !kemonomimi2
āā !woof
āā !holo2
āā !hug
āā !kiss
āā !lizard
āā !meowi
āā !neko2
āā !pat
āā !poke
āā !slap
āā !tickle
āā !baka
āā !smug
āā !neko-sfw
āā !hentai
āā !hentai-gif
āā !spank
āā !blowjob
āā !cumarts
āā !eroyuri
āā !eroneko
āā !erokemonomimi
āā !erokitsune
āā !ero
āā !feet
āā !erofeet
āā !feetgif
āā !femdom
āā !futanari
āā !hentai
āā !holoero
āā !holo
āā !keta
āā !kitsune
āā !kemonomimi
āā !pussyart
āā !pussywankgif
āā !girl-solo
āā !girl-solo-gif
āā !tits
āā !trap
āā !yuri
āā !avatar2
āā !anal
āā !bj
āā !boobs
āā !classic
āā !cumsluts
āā !kuni
āā !lesbian
āā !neko
āā !neko-gif
āā !ahegao
āā !bdsm
āā !cuckold
āā !cum
āā !foot
āā !gangbang
āā !glasses
āā !jahy
āā !masturbation
āā !nsfw-neko
āā !orgy
āā !panties
āā !tentacles
āā !thighs
ā°ā !zettai
`
}

exports.textpro = (prefix) =>{
	return`ā­āā ć Textpro Menu ć
āā !halloween2 text|text2
āā !horror text|text2
āā !game8bit text|text2
āā !layered text|text2
āā !glitch2 text|text2
āā !cool-graffiti text|text2
āā !cool-wall-graffiti text|text2
āā !realistic text|text2
āā !space3d text|text2
āā !glitch-tiktok text|text2
āā !stone text|text2
āā !marvel text|text2
āā !marvel2 text|text2
āā !pornhub text|text2
āā !avengers text|text2
āā !metal-rainbow text|text2
āā !metal-gold text|text2
āā !metal-galaxy text|text2
āā !halloween2 text|text2
āā !lion text|text2
āā !wolf-black-white text|text2
āā !wolf-galaxy text|text2
āā !ninja text|text2
āā !3dsteel text|text2
āā !horror2 text|text2
āā !lava text|text2
āā !bagel text|text2
āā !blackpink text
āā !rainbow2 text
āā !water-pipe text
āā !halloween text
āā !sketch text
āā !sircuit text
āā !discovery text
āā !metallic2 text
āā !fiction text
āā !demon text
āā !transformer text
āā !berry text
āā !thunder text
āā !magma text
āā !3dstone text
āā !neon text
āā !glitch text
āā !harry-potter text
āā !embossed text
āā !broken text
āā !papercut text
āā !gradient text
āā !glossy text
āā !watercolor text
āā !multicolor text
āā !neon-devil text
āā !underwater text
āā !bear text
āā !wonderful-graffiti text
āā !christmas text
āā !neon-light text
āā !snow text
āā !cloudsky text
āā !luxury2 text
āā !gradient2 text
āā !summer text
āā !writing text
āā !engraved text
āā !summery text
āā !3dglue text
āā !metaldark text
āā !neonlight text
āā !oscar text
āā !minion text
āā !holographic text
āā !purple text
āā !glossy-blue text
āā !deluxe-gold text
āā !glossy-carbon text
āā !fabric text
āā !neonc text
āā !newyear text
āā !newyear2 text
āā !metal-silver text
āā !xmas text
āā !blood text
āā !dark-gold text
āā !joker text
āā !wicker text
āā !natural text
āā !firework text
āā !skeleton text
āā !red-balloon text
āā !purple-balloon text
āā !pink-balloon text
āā !green-balloon text
āā !cyan-balloon text
āā !blue-balloon text
āā !gold-balloon text
āā !steel text
āā !gloss text
āā !denim text
āā !decorate text
āā !decorate-purple text
āā !peridot text
āā !rock text
āā !yellow-glass text
āā !purple-glass text
āā !orange-glass text
āā !green-glass text
āā !cyan-glass text
āā !blue-glass text
āā !red-glass text
āā !purple-shiny-glass text
āā !captain-as2 text
āā !robot text
āā !equalizer text
āā !toxic text
āā !pink-sparkling text
āā !blue-sparkling text
āā !green-sparkling text
āā !purple-sparkling text
āā !gold-sparkling text
āā !red-sparkling text
āā !cyan-sparkling text
āā !decorative text
āā !chocolate text
āā !strawberry text
āā !koifish text
āā !bread text
āā !matrix text
āā !blood2 text
āā !neonligth2 text
āā !thunder2 text
āā !3dbox text
āā !neon2 text
āā !road-warning text
āā !bokeh text
āā !green-neon text
āā !advanced text
āā !dropwater text
āā !wall text
āā !chrismast text
āā !honey2 text
āā !drug text
āā !marble text
āā !marble2 text
āā !ice text
āā !juice text
āā !rusty text
āā !abstra text
āā !biscuit text
āā !wood text
āā !scifi text
āā !metal-rainbow text
āā !metal-rose-gold text
āā !purple-gem text
āā !shiny text 
āā !yellow-jewelry text
āā !silver-jewelry text
āā !red-jewelry text
āā !purple-jewelry text
āā !orange-jewelry text
āā !green-jewelry text
āā !cyan-jewelry text
āā !blue-jewelry text
āā !hot-metal text
āā !golden text
āā !blue-glitter text
āā !purple-glitter text
āā !pink-glitter text
āā !green-glitter text
āā !silver-glitter text
āā !gold-glitter text
āā !bronze-glitter text
āā !eroded-metal text
āā !carbon text
āā !candy text
āā !blue-metal text
āā !blue-gem text
āā !3dchrome text
āā !black-metal text
ā°ā !metal-gold text
`
}


exports.other = (prefix) =>{
return`ā­āā ć Others ć
āā !ttp [text]
āā !attp [text]
āā !afk [reason]
āā !translate kode_bahasa text
āā !kalkulator [query]
āā !smeme [text]
āā !smeme2 [text|text]
ā°ā !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`ā­āā ć Game Menu ć
āā !tembak
āā !tolak
āā !terima
āā !putusin
āā !ikhlasin
āā !cekpacar
āā !kuismath
āā !tebakgambar
āā !tebakkata
āā !tebakbendera
āā !tebakkalimat
āā !tebaksiapa
āā !tebakkabupaten
āā !tebakkimia
āā !tebaklirik
āā !tebaktebakan
āā !tekateki
āā !susunkata
ā°ā !caklontong
`
}
exports.asupan = (prefix) =>{
return`ā­āā ć Asupan Menu ć
āā !chika
āā !delvira
āā !ayu
āā !bunga
āā !aura
āā !nisa
āā !ziva
āā !yana
āā !viona
āā !syania
āā !riri
āā !syifa
āā !mama_gina
āā !alcakenya
āā !mangayutri
āā !rikagusriani
āā !asupan
āā !bocil
āā !geayubi
āā !santuy
āā !ukhty
ā°ā !syifa
`
}
exports.cecan = (prefix) =>{
return`ā­āā ć Random Cewe ć
āā !china 
āā !indonesia 
āā !malaysia 
āā !thailand 
āā !korea 
āā !japan 
āā !vietnam 
āā !jenni 
āā !jiso 
āā !lisa  
ā°ā !rose
`
}

exports.tqto = () =>{
	return`ā­āā ć TqTo ć 
āā My God
āā My Parents
āā Fatih A.
āā Ferdi
āā DikaArdnt
āā Mhankbarbar
āā Nurutomo
āā Rashid
āā ZeeoneOfc
āā Penyedia Module
ā°ā And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`ā­āā ć Primbon ć
āā !nomorhoki 887435047326
āā !artimimpi [query]
āā !artinama [query]
āā !ramaljodoh
āā !ramaljodohbali
āā !suamiistri
āā !ramalcinta
āā !cocoknama
āā !pasangan
āā !jadiannikah
āā !sifatusaha
āā !rezeki
āā !pekerjaan
āā !nasib
āā !penyakit
āā !tarot
āā !fengshui
āā !haribaik
āā !harisangar
āā !harisial
āā !nagahari
āā !arahrezeki
āā !peruntungan
āā !weton
āā !karakter
āā !keberuntungan
āā !memancing
āā !masasubur
āā !zodiak 
ā°ā !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`ā­āā ć Telegram Sticker ć
āā !awoawo
āā !benedict
āā !chat
āā !dbfly
āā !dino_kuning
āā !doge
āā !gojosatoru
āā !hope_boy
āā !jisoo
āā !kr_robot
āā !kucing
āā !lonte
āā !manusia_lidi
āā !menjamet
āā !meow
āā !nicholas
āā !patrick
āā !popoci
āā !sponsbob
āā !kawan_sponsbob
ā°ā !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`ā­āā ć Ephoto360 Menu ć
āā !youtubegold text
āā !youtubesilver text
āā !facebookgold text
āā !facebooksilver text
āā !instagramgold text
āā !instagramsilver text
āā !twittergold text
āā !twittersilver text
āā !retrotext text
āā !halloweenbats text
āā !texthalloween text
āā !cardhalloween text
āā !birthdaycake text
āā !thundertext text
āā !icetext text
āā !milkcake text
āā !snowontext text
āā !metalstar text
āā !dragonfire text
āā !zombie3d text
āā !merrycard text
āā !generalexam text 
āā !viettel text
āā !embroider text
āā !graffititext text
āā !graffititext2 text
āā !graffititext3 text
āā !covergraffiti text
āā !moderngold text
āā !capercut text
āā !lovecard text
āā !heartflashlight text
āā !heartcup text
āā !sunglightshadow text
āā !graffiti3d text
āā !moderngoldsilver text
āā !moderngold2 text
āā !moderngold3 text
āā !fabrictext text
āā !masteryavatar text
āā !messagecoffee text
āā !announofwin text
āā !writeblood text
āā !horrorletter text
āā !writehorror text
āā !shirtclub text
āā !angelwing text
āā !christmasseason text
āā !projectyasuo text
āā !lovelycute text
āā !womansday text
āā !covergamepubg text
āā !nameonheart text
āā !funnyhalloween text
āā !lightningpubg text
āā !greetingcardvideo text 
āā !christmascard text 
āā !galaxybat text
āā !writegalaxy text
āā !starsnight text
āā !noeltext text
āā !textcakes text
āā !pubgbirthday text
āā !galaxywallpaper text
āā !pubgglicthvideo text 
āā !pubgmascotlogo text
āā !realembroidery text
āā !vintagetelevision text
āā !funnyanimations text
āā !glowingtext text
āā !textonglass text
āā !cartoonstyle text
āā !multicolor text
āā !watercolor2 text
āā !textsky text
āā !summerbeach text
āā !1917text text
āā !puppycute text
āā !rosebirthday text
āā !steellettering text|text2
āā !letterstext text|text2
āā !barcashirt text|text2
āā !premiercup text|text2
āā !stylepoligon text|text2
āā !lifebuoys text|text2
ā°ā !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`ā­āā ć Logo Menu ć
āā !coverbannerlol text|heroes
āā !pubglogomaker text|style
āā !colorfulpubg text|color
āā !astronotspace text|style
āā !wallpaperaov text|heroes
āā !maketeamlogo text|style
āā !circlemarcotteam text|logo
āā !wallpaperml text|heroes
āā !dragonballfb text|character
āā !bannerofaov text|character
āā !effect3donbeach text|background
āā !cutegirlgamer text|logo
āā !footballteam text|logo
āā !beautifulshimmering text|champion
āā !pubgcutelogo text|logo
āā !elegantrotation text|logo
āā !logogamingassasin text|logo
āā !introvideomaker text|logo
āā !gaminglogo4fvs text|logo
āā !blueneon text|logo
āā !metalmascot text|logo
āā !anonymous2 text|style
āā !lolpentakill text|style
āā !avatarleagueofking text|style
āā !avatarff text|character
āā !overwatchwallpaper text|character
āā !rovwallpaperhd text|hero
āā !rovwallpaper text|avatar
āā !beautifulgalaxylol text|style
āā !crossfirecover text|character
āā !lolwallpaper text|wallpaper
āā !coverdota2 text|heroes
āā !coverleagueofking text|character
āā !avatar3q360 text|avatar
āā !coverofwarface text|character
āā !newlolavatar text|avatar
āā !csgocover text|background
āā !coverloknew text|hero
āā !coverfblol text|letters
āā !overwatchcover text|hero
āā !crossfirestyle text|avatar
āā !avatarlolbyname text|style
āā !lolcoverbyname text|avatar
āā !cyberhunterfb text|character
āā !coverfreefirefb text|character
āā !gamingmascot text|style
āā !coveronepiecefb text|character
āā !bannerytcsgo text|banner
āā !fbgamepubgcover text|template
āā !banneroflol text|text2|banner
āā !bannerofaov2 text|text2|banner
āā !teamlogo text|text2|background
āā !companylogo2 text|text2|background
āā !companylogo text|text2|background
āā !gradientlogo text|text2|background
āā !pencilsketch text|text2|icon
āā !gunlogogaming text|text2|background
āā !banneroffreefire text|text2|background
āā !letterlogos text|text2|thumb
āā !bannerofoverwatch text|text2|background
āā !bannerofapex text|text2|background
āā !bannerofpubg text|text2|background
āā !mascotstyle text|text2|thumb
āā !logoaccording text|text2|thumb
ā°ā !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`ā­āā ć Islamic Menu ć
āā !asmaulhusna
āā !kisahnabi [nabi]
āā !jadwalshalat [daerah]
āā !randomquran
āā !randomquran2
āā !listsurah
āā !tafsirsurah [surah]
ā°ā !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`ā­āā ć Anonymous ć
āā !menfess
āā !confess
āā !balasmenfess
āā !tolakmenfess
āā !stopmenfess
āā !anonymous 
āā !start
āā !skip [daerah]
ā°ā !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`ā­āā ć Store Menu ć
āā !list
āā !addlist [key|respond]
āā !dellist [key]
āā !update [key|respond]
āā !store
āā !kali
āā !bagi
āā !tambah
āā !kurang
āā !kalkulator
āā !setproses
āā !updateproses
āā !cekproses
āā !delproses
āā !setdone
āā !updatedone
āā !cekdone
āā !deldone
āā !pay
āā !setcaptionpay
āā !setpaysewa
āā !proses
ā°ā !done
`
}

exports.voiceChange = (prefix) =>{
	return`ā­āā ć Voice Change Menu ć
āā !bass
āā !blown
āā !deep
āā !earrape
āā !fast
āā !fat
āā !nightcore
āā !reverse
āā !robot
āā !slow
āā !smooth
ā°ā !tupai
`
}

exports.storagemenu = (prefix) =>{
	return`ā­āā ć Storage Menu ć
āā !addvn
āā !listvn
āā !delvn
āā !adddocument
āā !listdocument
āā !deldocument
āā !addtext
āā !listtext
āā !deltext
āā !addaudio
āā !listaudio
āā !delaudio
āā !addimage
āā !listimage
āā !delimage
āā !addvideo
āā !listvideo
āā !delvideo
āā !addstik
āā !delstik
ā°ā !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`ā­āā ć Rpg Games ć
āā !adventure
āā !weekly
āā !use
āā !transfer
āā !slot
āā !shop
āā !pasar
āā !profile
āā !ojek
āā !open
āā !nguli
āā !narik
āā !nabung
āā !monthly
āā !mining
āā !merampok
āā !mancing
āā !kolam
āā !koboy
āā !kerja
āā !kandang
āā !judi
āā !inventory
āā !hourly
āā !fishop
āā !feed
āā !duel
āā !daily
āā !craft
āā !cooldown
āā !cook
āā !collect
āā !chop
āā !casino
āā !buy
āā !bank 
āā !bansos
āā !berdagang
āā !berkebon
ā°ā !build
`
}

exports.photooxy = (prefix)=>{
	return`ā­āā ć Photooxy Menu ć
āā !battlegrounds-logo
āā !battlefield4
āā !text-8bit
āā !typography-flower 
āā !under-flower 
āā !bevel-text 
āā !silk-text 
āā !sweet-andy 
āā !smoke-typography 
āā !carvedwood 
āā !scary-cemetery 
āā !royallook 
āā !coffeecup2 
āā !illuminated 
āā !harry-potter2 //
āā !woodblack //
āā !butterfly-reflection //
āā !watermelon // 
āā !striking // 
āā !metallicglow //
āā !rainbow-text 
āā !birthday-cake 
āā !embroidery // 
āā !crisp 
āā !flaming 
āā !furtext 
āā !nightsky 
āā !glow-rainbow 
āā !gradient-avatar 
āā !white-cube // 
āā !honey-text // 
āā !vintage-style //
āā !glowing-3d // 
āā !army-camouflage 
āā !graffiti-cover 
āā !rainbow-shine 
āā !smoky-neon 
āā !quotes-underfall //
āā !layered-leaves 
āā !vector-nature 
āā !yellow-rose 
āā !love-text 
āā !underwater-ocean 
āā !nature-text 
āā !wolf-metal 
āā !summer-text 
āā !wooden-board //
āā !flower-heart
āā !quote-wood 
āā !love-text 
āā !quotes-undergrass 
āā !naruto-banner 
āā !love-message 
āā !textoncup2 
āā !burn-paper 
āā !smoke 
āā !romantic-messages 
āā !shadow-sky 
āā !text-cup 
ā°ā !coffecup
`
}

exports.soundmenu = (prefix) =>{
return`ā­āā ć Sound Menu ć
āā !sound1
āā !sound2
āā !sound3
āā !sound4
āā !sound5
āā !sound6
āā !sound7
āā !sound8
āā !sound9
āā !sound10
āā !sound11
āā !sound12
āā !sound13
āā !sound14
āā !sound15
āā !sound16
āā !sound17
āā !sound18 
āā !sound19
āā !sound20
āā !sound21
āā !sound22
āā !sound23
āā !sound24
āā !sound25
āā !sound26
āā !sound27
āā !sound28
āā !sound29
āā !sound30
āā !sound31
āā !sound32
āā !sound33
āā !sound34
āā !sound35
āā !sound36
āā !sound37
āā !sound38
āā !sound39
āā !sound40
āā !sound41
āā !sound42
āā !sound43
āā !sound44
āā !sound45
āā !sound46
āā !sound47
āā !sound48
āā !sound49
āā !sound50
āā !sound51
āā !sound52
āā !sound53
āā !sound54
āā !sound55
āā !sound56
āā !sound57
āā !sound58
āā !sound59
āā !sound60
āā !sound61
āā !sound62
āā !sound63
āā !sound64
āā !sound65
āā !sound66
āā !sound67
āā !sound68
āā !sound69
ā°ā !sound70
`
}
