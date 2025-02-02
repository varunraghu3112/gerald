## Project Structure

```
├── android/                         # Android native code
├── ios/                            # iOS native code
├── src/                            # Source files
│   ├── colors.ts                   # Color definitions
│   ├── components/                 # Reusable components
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   └── InHouseDrawer/
│   │       ├── DrawerContent.tsx
│   │       ├── DrawerItem.tsx
│   │       └── index.tsx
│   ├── constants/                  # Application constants
│   │   ├── animation.ts
│   │   └── routes.ts
│   ├── context/                    # React Context definitions
│   │   └── DrawerContext.tsx
│   ├── hooks/                      # Custom React hooks
│   │   ├── useCurrentRoute.ts
│   │   ├── useMainScreenAnimation.ts
│   │   └── useRotationAnimation.ts
│   ├── navigators/                 # Navigation setup
│   │   ├── HomeStackNavigator.tsx
│   │   ├── RootLayout.tsx
│   │   └── TabNavigator.tsx
│   └── screens/                    # Application screens
│       ├── Contact/
│       │   └── Contact.tsx
│       └── Home/
│           ├── Favourites.tsx
│           ├── Start.tsx
│           └── YourCart.tsx
├── App.tsx                         # App entry point
├── index.js                        # Root component
├── package.json                    # Project dependencies
└── README.md
```

## Navigation Structure

The app uses a nested navigation structure with a custom drawer implementation:

```
RootLayout
└── InHouseDrawer (Custom Animated Drawer can be navigated anywhere inside the Drawer from any stack to any stack)
    └── TabNavigator
        ├── HomeStackNavigator
        │   ├── Start
        │   ├── YourCart
        │   └── Favourites
        └── Contact
```

### Navigation Components

1. **RootLayout**

   - Root component that manages the overall layout
   - Provides DrawerContext for drawer state management

2. **InHouseDrawer**

   - Custom animated drawer implementation
   - Uses `useMainScreenAnimation` and `useRotationAnimation` for smooth transitions
   - Components:
     - `DrawerContent`: Main drawer content component
     - `DrawerItem`: Individual drawer menu items
     - Controlled through DrawerContext

3. **TabNavigator**

   - Bottom tab navigation
   - Manages navigation between main sections:
     - Home stack
     - Contact screen

4. **HomeStackNavigator**
   - Stack navigation for home-related screens
   - Includes:
     - Start (Home screen)
     - YourCart
     - Favourites
   - Maintains navigation history within the home section

### Animation and Interaction

- used Reanimated for animations (version 3.16.7)
- used useMainScreenAnimation hook for animations that can be used by anyone who needs animations while drawer is opening
- used worklet for animations to make them more efficient
- Drawer uses custom animations for opening/closing

### Others

- RN Gesture Handler is used to improve the performance and it needs to tightly coupled with re animated
- Custom hooks and contexts are written for ease of reusablity Current route tracking via `useCurrentRoute` hook
- constants are written for ease of use and reusablity
