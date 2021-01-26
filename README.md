
    ```
    sfdx auth:web:login -d -a myhuborg
    ```

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a fonta
    ```


1. Push the app to your scratch org:

    ```
    sfdx force:source:push -u fonta
    ```

    sfdx force:org:open -u fonta