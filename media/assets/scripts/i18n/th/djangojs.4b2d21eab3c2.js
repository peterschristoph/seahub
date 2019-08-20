

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "(current version)": "(\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19)", 
    "Active": "\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19", 
    "Activities": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21", 
    "Add Admins": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a", 
    "Add admin": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a", 
    "Add password protection": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Add user": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", 
    "Admin": "\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a", 
    "All": "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "All Groups": "\u0e01\u0e25\u0e38\u0e48\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "All Public Links": "\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e30\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "All file types": "\u0e17\u0e38\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1f\u0e25\u0e4c", 
    "Are you sure you want to delete %s ?": "\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a %s ?", 
    "Are you sure you want to delete these selected items?": "\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e44\u0e2d\u0e40\u0e17\u0e21\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e01\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49?", 
    "Are you sure you want to quit this group?": "\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21 ?", 
    "Are you sure you want to restore this library?": "\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48 \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e01\u0e39\u0e49\u0e04\u0e37\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Are you sure you want to unshare %s ?": "\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19  %s ?", 
    "Audio": "\u0e40\u0e2a\u0e35\u0e22\u0e07", 
    "Avatar": "\u0e2d\u0e27\u0e15\u0e32\u0e23", 
    "Avatar:": "\u0e2d\u0e27\u0e15\u0e32\u0e23:", 
    "Can not copy directory %(src)s to its subdirectory %(des)s": "\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01 %(src)s \u0e44\u0e1b\u0e22\u0e31\u0e07\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48\u0e22\u0e48\u0e2d\u0e22 %(des)s", 
    "Can not move directory %(src)s to its subdirectory %(des)s": "\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e22\u0e49\u0e32\u0e22\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48 %(src)s \u0e44\u0e1b\u0e22\u0e31\u0e07\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48\u0e22\u0e48\u0e2d\u0e22 %(des)s", 
    "Cancel": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01", 
    "Cancel All": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "Canceled.": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e25\u0e49\u0e27", 
    "Change Password": "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Close": "\u0e1b\u0e34\u0e14", 
    "Confirm Password": "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Copy": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01", 
    "Count": "\u0e19\u0e31\u0e1a", 
    "Create At / Last Login": "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d / \u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14", 
    "Created At": "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d", 
    "Created library": "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e49\u0e27", 
    "Creator": "\u0e1c\u0e39\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07", 
    "Current Library": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19", 
    "Current Path: ": "\u0e1e\u0e32\u0e18\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19:", 
    "Current path: ": "\u0e1e\u0e32\u0e18\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19:", 
    "Custom file types": "\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1f\u0e25\u0e4c\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07", 
    "Delete": "\u0e25\u0e1a", 
    "Delete Account": "\u0e25\u0e1a\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", 
    "Delete Group": "\u0e25\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21", 
    "Delete Items": "\u0e25\u0e1a\u0e44\u0e2d\u0e40\u0e17\u0e21", 
    "Delete Member": "\u0e25\u0e1a\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01", 
    "Delete Time": "\u0e40\u0e27\u0e25\u0e32\u0e25\u0e1a", 
    "Delete User": "\u0e25\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", 
    "Deleted directories": "\u0e25\u0e1a\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27", 
    "Deleted files": "\u0e25\u0e1a\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e25\u0e49\u0e27", 
    "Description": "\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22", 
    "Detail": "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14", 
    "Details": "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14", 
    "Device Name": "\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c", 
    "Devices": "\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c", 
    "Diff": "\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07", 
    "Directory": "\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48", 
    "Dismiss Group": "\u0e25\u0e30\u0e17\u0e34\u0e49\u0e07\u0e01\u0e25\u0e38\u0e48\u0e21", 
    "Document convertion failed.": "\u0e41\u0e1b\u0e25\u0e07\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Documents": "\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23", 
    "Don't keep history": "\u0e44\u0e21\u0e48\u0e40\u0e01\u0e47\u0e1a\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34", 
    "Download": "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14", 
    "Edit": "\u0e41\u0e01\u0e49\u0e44\u0e02", 
    "Edit failed.": "\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Email": "\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c", 
    "Empty file upload result": "\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e27\u0e48\u0e32\u0e07", 
    "Encrypt": "\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2b\u0e31\u0e2a", 
    "Error": "\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Failed.": "\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Failed. Please check the network.": "\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14. \u0e42\u0e1b\u0e23\u0e14\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22", 
    "File": "\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "File download is disabled: the share link traffic of owner is used up.": "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e16\u0e39\u0e01\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19: \u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e17\u0e23\u0e32\u0e1f\u0e1f\u0e34\u0e01\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e39\u0e48", 
    "File is too big": "\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", 
    "File is too small": "\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", 
    "Files": "\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Filetype not allowed": "\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15", 
    "Folders": "\u0e42\u0e1f\u0e25\u0e40\u0e14\u0e2d\u0e23\u0e4c", 
    "Generate": "\u0e2a\u0e23\u0e49\u0e32\u0e07", 
    "Group": "\u0e01\u0e25\u0e38\u0e48\u0e21", 
    "Groups": "\u0e01\u0e25\u0e38\u0e48\u0e21", 
    "Help": "\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d", 
    "History": "\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34", 
    "IP": "IP", 
    "Images": "\u0e20\u0e32\u0e1e", 
    "In all libraries": "\u0e43\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "Inactive": "\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19", 
    "Info": "\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Input file extensions here, separate with ','": "\u0e1b\u0e49\u0e2d\u0e19\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25\u0e44\u0e1f\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48, \u0e41\u0e1a\u0e48\u0e07\u0e42\u0e14\u0e22 ','", 
    "Internal Server Error": "Internal Server Error", 
    "Internal error. Failed to copy %(name)s.": "Internal error \u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01 %(name)s \u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Internal error. Failed to move %(name)s.": "Internal error \u0e22\u0e49\u0e32\u0e22 %(name)s \u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14", 
    "Invalid destination path": "\u0e1e\u0e32\u0e18\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07", 
    "It is required.": "\u0e21\u0e31\u0e19\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19", 
    "Just now": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27\u0e19\u0e35\u0e49", 
    "Keep full history": "\u0e40\u0e01\u0e47\u0e1a\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "Language": "\u0e20\u0e32\u0e29\u0e32", 
    "Language Setting": "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e20\u0e32\u0e29\u0e32", 
    "Last Access": "\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14", 
    "Last Update": "\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14", 
    "Leave Share": "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19", 
    "Libraries": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Libraries shared as writable can be downloaded and synced by other group members. Read only libraries can only be downloaded, updates by others will not be uploaded.": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e1a\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19 \u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 \u0e41\u0e25\u0e30\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e42\u0e14\u0e22\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2d\u0e37\u0e48\u0e19\u0e43\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21 \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e19\u0e31\u0e49\u0e19 \u0e43\u0e2b\u0e49\u0e2d\u0e48\u0e32\u0e19 \u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 \u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e42\u0e14\u0e22\u0e1c\u0e39\u0e49\u0e2d\u0e37\u0e48\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49", 
    "Library": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Links": "\u0e25\u0e34\u0e07\u0e01\u0e4c", 
    "Loading...": "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...", 
    "Log out": "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a", 
    "Logs": "\u0e1b\u0e39\u0e21\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c", 
    "Members": "\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01", 
    "Message (optional):": "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (\u0e40\u0e25\u0e37\u0e2d\u0e01)", 
    "Modification Details": "\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14", 
    "Modified files": "\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e25\u0e49\u0e27", 
    "Modifier": "\u0e1c\u0e39\u0e49\u0e41\u0e01\u0e49\u0e44\u0e02", 
    "More": "\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32", 
    "More Operations": "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21", 
    "Move": "\u0e22\u0e49\u0e32\u0e22", 
    "My Groups": "\u0e01\u0e25\u0e38\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19", 
    "Name": "\u0e0a\u0e37\u0e48\u0e2d", 
    "Name is required": "\u0e0a\u0e37\u0e48\u0e2d \u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19", 
    "Name is required.": "\u0e0a\u0e37\u0e48\u0e2d \u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19", 
    "New File": "\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e21\u0e48", 
    "New Group": "\u0e01\u0e25\u0e38\u0e48\u0e21\u0e43\u0e2b\u0e21\u0e48", 
    "New Library": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e21\u0e48", 
    "New Password Again": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", 
    "New directories": "\u0e44\u0e14\u0e40\u0e23\u0e47\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48\u0e43\u0e2b\u0e21\u0e48", 
    "New files": "\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e21\u0e48", 
    "New password is too short": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e2a\u0e31\u0e49\u0e19\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", 
    "New passwords don't match": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19", 
    "Next": "\u0e15\u0e48\u0e2d\u0e44\u0e1b", 
    "No result": "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c", 
    "None": "\u0e44\u0e21\u0e48\u0e21\u0e35", 
    "Notifications": "\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19", 
    "Old Password": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e01\u0e48\u0e32", 
    "Only an extension there, please input a name.": "\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e2a\u0e48\u0e27\u0e19\u0e02\u0e22\u0e32\u0e22\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19, \u0e42\u0e1b\u0e23\u0e14\u0e43\u0e2a\u0e48\u0e0a\u0e37\u0e48\u0e2d ", 
    "Only keep a period of history:": "\u0e40\u0e01\u0e47\u0e1a\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e0a\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07", 
    "Operations": "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23", 
    "Organization": "\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23", 
    "Organizations": "\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23", 
    "Other Libraries": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d", 
    "Owner": "\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07", 
    "Password": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Password again": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", 
    "Password is required.": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19", 
    "Password is too short": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e31\u0e49\u0e19\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", 
    "Password:": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19:", 
    "Passwords don't match": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19", 
    "Permission": "\u0e23\u0e31\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15", 
    "Permission denied": "\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15", 
    "Platform": "\u0e41\u0e1e\u0e25\u0e17\u0e1f\u0e2d\u0e23\u0e4c\u0e21", 
    "Please check the network.": "\u0e42\u0e1b\u0e23\u0e14\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22", 
    "Please choose a CSV file": "\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c CSV ", 
    "Please click and choose a directory.": "\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e14\u0e41\u0e25\u0e30\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e14\u0e40\u0e23\u0e01\u0e17\u0e2d\u0e23\u0e35\u0e48", 
    "Please enter password": "\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Please enter the new password again": "\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", 
    "Please enter the old password": "\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e01\u0e48\u0e32", 
    "Please enter the password again": "\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", 
    "Please input at least an email.": "\u0e42\u0e1b\u0e23\u0e14\u0e1b\u0e49\u0e2d\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c", 
    "Previous": "\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a", 
    "Processing...": "\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25...", 
    "Profile": "\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27", 
    "Profile Setting": "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27", 
    "Quit Group": "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21", 
    "Read-Only": "\u0e2d\u0e48\u0e32\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27", 
    "Read-Write": "\u0e2d\u0e48\u0e32\u0e19-\u0e40\u0e02\u0e35\u0e22\u0e19", 
    "Really want to delete your account?": "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13?", 
    "Really want to dismiss this group?": "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e30\u0e17\u0e34\u0e49\u0e07\u0e01\u0e25\u0e38\u0e48\u0e21\u0e08\u0e23\u0e34\u0e07\u0e2b\u0e23\u0e37\u0e2d?", 
    "Remove": "\u0e40\u0e2d\u0e32\u0e2d\u0e2d\u0e01", 
    "Rename": "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d", 
    "Rename File": "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e1f\u0e25\u0e4c", 
    "Renamed or Moved files": "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e23\u0e37\u0e2d\u0e22\u0e49\u0e32\u0e22\u0e44\u0e1f\u0e25\u0e4c", 
    "Reset Password": "\u0e23\u0e35\u0e40\u0e0b\u0e15\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "ResetPwd": "\u0e23\u0e35\u0e40\u0e0b\u0e15\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19", 
    "Restore": "\u0e01\u0e39\u0e49\u0e04\u0e37\u0e19", 
    "Restore Library": "\u0e01\u0e39\u0e49\u0e04\u0e37\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Revoke Admin": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a", 
    "Role": "\u0e1a\u0e17\u0e1a\u0e32\u0e17", 
    "Saving...": "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01...", 
    "Seafile": "Seafile", 
    "Search Files": "\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e44\u0e1f\u0e25\u0e4c", 
    "Search files in this library": "\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "See All Notifications": "\u0e14\u0e39\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "Send": "\u0e2a\u0e48\u0e07", 
    "Send to:": "\u0e2a\u0e48\u0e07\u0e16\u0e36\u0e07:", 
    "Sending...": "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...", 
    "Server Version: ": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e21\u0e48\u0e02\u0e48\u0e32\u0e22\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19:", 
    "Set Quota": "\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e42\u0e04\u0e27\u0e15\u0e49\u0e32", 
    "Settings": "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32", 
    "Share": "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19", 
    "Share Admin": "\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19", 
    "Share From": "\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19", 
    "Share To": "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e01\u0e31\u0e1a", 
    "Shared by: ": "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e42\u0e14\u0e22:", 
    "Size": "\u0e02\u0e19\u0e32\u0e14", 
    "Space Used": "\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e44\u0e1b", 
    "Start": "\u0e40\u0e23\u0e34\u0e48\u0e21", 
    "Status": "\u0e2a\u0e16\u0e32\u0e19\u0e30", 
    "Submit": "\u0e2a\u0e48\u0e07", 
    "Successfully copied %(name)s and %(amount)s other items.": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01 %(name)s and %(amount)s \u0e44\u0e2d\u0e40\u0e17\u0e47\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully copied %(name)s.": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01 %(name)s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully deleted %(name)s": "\u0e25\u0e1a %(name)s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully deleted %(name)s and %(amount)s other items.": "\u0e25\u0e1a %(name)s \u0e41\u0e25\u0e30 %(amount)s \u0e44\u0e2d\u0e40\u0e17\u0e47\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully deleted %(name)s.": "\u0e25\u0e1a %(name)s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully deleted %s": "\u0e25\u0e1a %s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27", 
    "Successfully moved %(name)s and %(amount)s other items.": "\u0e22\u0e49\u0e32\u0e22 %(name)s \u0e41\u0e25\u0e30 %(amount)s \u0e44\u0e2d\u0e40\u0e17\u0e47\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully moved %(name)s.": "\u0e22\u0e49\u0e32\u0e22 %(name)s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully reset password to %(passwd)s for user %(user)s.": "\u0e23\u0e35\u0e40\u0e0b\u0e15\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e39\u0e48 %(passwd)s \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a %(user)s", 
    "Successfully revoke the admin permission of %s": "\u0e16\u0e2d\u0e19\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a %s \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "Successfully set %s as admin.": "\u0e01\u0e33\u0e2b\u0e19\u0e14 %s \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08", 
    "System Admin": "\u0e2a\u0e48\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a", 
    "Text files": "\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21", 
    "The password will be kept in the server for only 1 hour.": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e1a\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e21\u0e48\u0e02\u0e48\u0e32\u0e22 1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19", 
    "This operation will not be reverted. Please think twice!": "\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e19\u0e35\u0e49\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1b\u0e25\u0e07\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a \u0e42\u0e1b\u0e23\u0e14\u0e04\u0e34\u0e14\u0e43\u0e2b\u0e49\u0e14\u0e35!", 
    "Time": "\u0e40\u0e27\u0e25\u0e32", 
    "Transfer": "\u0e16\u0e48\u0e32\u0e22\u0e42\u0e2d\u0e19", 
    "Transfer Library": "\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e16\u0e48\u0e32\u0e22\u0e42\u0e2d\u0e19", 
    "Trash": "\u0e16\u0e31\u0e07\u0e02\u0e22\u0e30", 
    "Unknown": "\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49", 
    "Unlink": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e25\u0e34\u0e07\u0e01\u0e4c", 
    "Unshare": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19", 
    "Unshare Library": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "Unstar": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e15\u0e34\u0e14\u0e14\u0e32\u0e27", 
    "Update": "\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07", 
    "Upload": "\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14", 
    "Upload Files": "\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c", 
    "Upload Link": "\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e25\u0e34\u0e07\u0e01\u0e4c", 
    "Upload Links": "\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e25\u0e34\u0e07\u0e01\u0e4c", 
    "Uploaded bytes exceed file size": "\u0e02\u0e19\u0e32\u0e14\u0e44\u0e1a\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e01\u0e34\u0e19\u0e02\u0e19\u0e32\u0e14\u0e44\u0e1f\u0e25\u0e4c", 
    "Used:": "\u0e43\u0e0a\u0e49\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27:", 
    "User": "\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", 
    "Users": "\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49", 
    "Video": "\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d", 
    "View": "\u0e40\u0e23\u0e35\u0e22\u0e01\u0e14\u0e39", 
    "View Snapshot": "\u0e14\u0e39 Snapshot", 
    "Visits": "\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21", 
    "Wrong password": "\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e1c\u0e34\u0e14", 
    "You are not in any groups": "\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21\u0e43\u0e14\u0e46", 
    "You can create a library to organize your files. For example, you can create one for each of your projects. Each library can be synchronized and shared separately.": "\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07, \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04 \u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e41\u0e22\u0e01\u0e08\u0e32\u0e01\u0e01\u0e31\u0e19", 
    "You can share a single folder with a registered user if you don't want to share a whole library.": "\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e42\u0e1f\u0e25\u0e40\u0e14\u0e2d\u0e23\u0e4c\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e35\u0e48\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e17\u0e31\u0e49\u0e07\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "You can share libraries by clicking the \"New Library\" button above or the \"Share\" icon on your libraries list.": "\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 \"\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e21\u0e48\" \u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e2d\u0e04\u0e2d\u0e19 \"\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\"  \u0e1a\u0e19\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25", 
    "You do not have connected devices": "\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d", 
    "You have not created any libraries": "\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e25\u0e31\u0e07\u0e41\u0e1f\u0e49\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e14\u0e46", 
    "Your clients (Desktop/Android/iOS) will be listed here.": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e25\u0e39\u0e01\u0e02\u0e48\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 (Desktop/Android/iOS) \u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49", 
    "all": "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "all members": "\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", 
    "days": "\u0e27\u0e31\u0e19", 
    "icon": "\u0e44\u0e2d\u0e04\u0e2d\u0e19", 
    "name": "\u0e0a\u0e37\u0e48\u0e2d", 
    "starred": "\u0e15\u0e34\u0e14\u0e14\u0e32\u0e27", 
    "to": "\u0e16\u0e36\u0e07", 
    "unstarred": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e15\u0e34\u0e14\u0e14\u0e32\u0e27", 
    "you can also press \u2190 ": "\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e14 \u2190 \u0e40\u0e0a\u0e48\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y, G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d %b %Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j M Y, G:i", 
    "SHORT_DATE_FORMAT": "j M Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S.%f", 
      "%H:%M:%S", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

