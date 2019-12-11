## useController

### param

- event

````````````````````````````````````
    -- Single --
    
    function onChange() {}
    const [value, setValue] = useController(..., onChange, ...);
    
    param of general:
    
    demo-1:
        setValue(100);
        
    
    param of createConfig:
    
    demo-1:
        {
            value: 100,
            event: v => v + 100, // Params different from value
        }
        
    demo-2:
        {
            value: v => v + 10,
            event: v => v + 100,
        }
        
    demo-3:
        {
            value: v => v + 10,
            event: [v => v + 100, 200], // Two event params
        }

    -- Multiple --
    
    function onChange() {}
    function onSelect() {}
    
    const [value, setValue] = useController(..., {
        onChange,
        onSelect,
    }, ...);
    
    param of general:
    
        Error
        
    param of createConfig:
    
    demo-1:
    
        {
            value: 100, // It'll also use to event params
            event: 'onChange',
        }
        
    demo-2:
        
        {
            value: v => v + 100,
            event: 'onChange',
        }
    
    demo-3:
    
        {
            value: 100, // It'll also use to event params
            event: ['onChange', 'onSelect'],
        }
    
    demo-4:
        {
            value: 100,
            event: {
                onChange: v => v + 10,
                onSelect: [v => v, 200],
            },
        }
        
````````````````````````````````````