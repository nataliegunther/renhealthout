/* ============================================================
   SITE SETTINGS — this is the only file you need to edit
   to turn on the patient portal and Weave contact links.
   Paste each address between the quotes, save, and push.
   ============================================================ */
window.SITE_CONFIG = {
  // InSync "inTouch" patient portal sign-in address.
  // Get the exact link from InSync — it usually looks like
  // "https://XXXXintouch.insynchcs.com/Login"
  portalUrl: "https://renewedhealthoutreachintouch.insynchcs.com/",

  // Weave Digital Form link (create the form in Weave, then copy its share link).
  // When this is filled in, the "Send us a message" buttons open it.
  weaveFormUrl: "",

  // Optional: Weave Text Connect chat bubble.
  // In Weave's Text Connect setup page, copy ONLY the address inside src="..."
  // (it ends in widget.js). Leave blank to hide the chat bubble.
  weaveTextConnectSrc: ""
};
