## Cypress Testing for Todo App

  Cypress:  |  3.5.0                                                                             
  | ---------| ----------------------------------------------------------------------------------- |
  Browser:  |  Electron 73 (headless)                                                             
  Specs:    |  5 found (app-init.spec.js, footer.spec.js, input.spec.js, list-item.spec.js, smoke-test.spec.js)                                                               

 ### Running:  app-init.spec.js                                            (1 of 5)

 ```                                                                                                   

 ### App Initialization

    ✓ Loads todos on page load (772ms)

    ✓ Displays an error on failuer (196ms)


  2 passing (1s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                            │
  │ Passing:      2                                                            │
  │ Failing:      0                                                            |                   
  │ Pending:      0                                                            |                   
  │ Skipped:      0                                                            |                   
  │ Screenshots:  0                                                            |                   
  │ Video:        true                                                         |                   
  │ Duration:     1 second                                                     |                   
  │ Spec Ran:     app-init.spec.js                                             |                   
  └────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /home/karthikshetty03/ReactApps/cypress-tutorial-build-todo     (1 second)
                          -starter/cypress/videos/app-init.spec.js.mp4                              


```
###  Running:  footer.spec.js                                       (2 of 5)

```


  Footer
    with a single todo

      ✓ displays a singular todo in cuunt (791ms)
    with multiple todos

      ✓ displays multiple todos (157ms)

      ✓ Handles filter links (468ms)


  3 passing (1s)


  (Results)

  ┌─────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                     |                           
  │ Passing:      3                                                     |                          
  │ Failing:      0                                                     |                          
  │ Pending:      0                                                     |                          
  │ Skipped:      0                                                     |                          
  │ Screenshots:  0                                                     |                          
  │ Video:        true                                                  |                          
  │ Duration:     1 second                                              |                          
  │ Spec Ran:     footer.spec.js                                        |                          
  └─────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /home/karthikshetty03/ReactApps/cypress-tutorial-build-todo    (0 seconds)
                          -starter/cypress/videos/footer.spec.js.mp4                                


```
###  Running:  input.spec.js                                        (3 of 5)

```


  Input Form

    ✓ focuses input on load (741ms)

    ✓ accepts input (386ms)
    Form Submission

      ✓ Adds a new todo (396ms)


  3 passing (2s)


  (Results)

  ┌───────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                   |                             
  │ Passing:      3                                                   |                            
  │ Failing:      0                                                   |                            
  │ Pending:      0                                                   |                            
  │ Skipped:      0                                                   |                           
  │ Screenshots:  0                                                   |                            
  │ Video:        true                                                |                            
  │ Duration:     1 second                                            |                            
  │ Spec Ran:     input.spec.js                                       |                            
  └───────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /home/karthikshetty03/ReactApps/cypress-tutorial-build-todo     (1 second)
                          -starter/cypress/videos/input.spec.js.mp4                                 


```
###  Running:  list-item.spec.js                                      (4 of 5)

```
     


  List Items

    ✓ properly displays completed items (774ms)

    ✓ Show remaining todos in the footer (140ms)

    ✓ Removes a todo (406ms)

    ✓ Marks an incomplete item complete (231ms)


  4 passing (2s)


  (Results)

  ┌───────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                       |                       
  │ Passing:      4                                                       |                       
  │ Failing:      0                                                       |                        
  │ Pending:      0                                                       |                        
  │ Skipped:      0                                                       |                        
  │ Screenshots:  0                                                       |                        
  │ Video:        true                                                    |                        
  │ Duration:     1 second                                                |                        
  │ Spec Ran:     list-item.spec.js                                       |                        
  └───────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /home/karthikshetty03/ReactApps/cypress-tutorial-build-todo    (0 seconds)
                          -starter/cypress/videos/list-item.spec.js.mp4                             


```
###  Running:  smoke-test.spec.js                                     (5 of 5)

```


  smoke tests
    with no todos

      ✓ Saves new todos (2124ms)
    With active todos

      ✓ Loads existing data from the database (580ms)

      ✓ Deletes Todos (911ms)

      ✓ Toggles todos (1149ms)


  4 passing (5s)


  (Results)

  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                         |                       
  │ Passing:      4                                                         |                      
  │ Failing:      0                                                         |                      
  │ Pending:      0                                                         |                      
  │ Skipped:      0                                                         |                      
  │ Screenshots:  0                                                         |                      
  │ Video:        true                                                      |                      
  │ Duration:     4 seconds                                                 |                      
  │ Spec Ran:     smoke-test.spec.js                                        |                      
  └────────────────────────────────────────────────────────────────────────-┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /home/karthikshetty03/ReactApps/cypress-tutorial-build-todo     (1 second)
                          -starter/cypress/videos/smoke-test.spec.js.mp4                            


```

 ### (Run Finished)

```

  ┌──────────────────────────────────────────────────────────────────────────┐
  │        Spec                  Tests  Passing  Failing  Pending  Skipped   │
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ ✔  app-init.spec.js   00:01    2       2         -        -        -     │
  ├──────────────────────────────────────────────────────────────────────────┤
  │ ✔  footer.spec.js     00:01    3       3         -        -        -     │
  ├──────────────────────────────────────────────────────────────────────────┤
  │ ✔  input.spec.js      00:01    3       3         -        -        -     │
  ├──────────────────────────────────────────────────────────────────────────┤
  │ ✔  list-item.spec.js  00:01    4       4         -        -        -     │ 
  ├──────────────────────────────────────────────────────────────────────────┤
  │ ✔  smoke-test.spec.js 00:04    4       4         -        -        -     │
  └──────────────────────────────────────────────────────────────────────────┘
  │ ✔  All specs passed!  00:10    16      16        -        -        -     │
  └──────────────────────────────────────────────────────────────────────────┘
  
```


