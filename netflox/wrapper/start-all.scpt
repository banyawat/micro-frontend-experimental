tell application "Finder"
	set current_path to (POSIX path of (container of (path to me) as alias))
    tell application "Terminal"
        activate
        tell window 1
            do script "cd " & current_path & " && cd ../featured && yarn && yarn start"
            do script "cd " & current_path & " && cd ../micro-login && yarn && yarn start"
            do script "cd " & current_path & " && cd ../theater && yarn && yarn start"
            do script "cd " & current_path & " && cd ../thumbnail && yarn && yarn start"
            do script "cd " & current_path & " && yarn && yarn start"
        end tell
    end tell
end tell