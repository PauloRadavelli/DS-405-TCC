import React from 'react'
import LoginPage from './pages/Login/login.page'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AdministratorPage } from './pages/Administrator/administrator.page'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HomePage } from './pages/HomePage/HomePage'
import registerNNPushToken from 'native-notify'
import { Logs } from './pages/LogsPage/Logs.page'
import { NewUser } from './pages/NewUser/NewUser'
import { DoorsList } from './pages/DoorsList/DoorsList'
import { MyPackages } from './pages/MyPackages/MyPackages'

const Stack = createNativeStackNavigator()

const queryClient = new QueryClient()

export default function App () {
  registerNNPushToken(4976, 'cB3EX57tZ8TXuCgDiyx07U')

  return (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ title: 'SmartBox' }}
            />

            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ title: 'SmartBox', headerBackVisible: false }}
            />

            <Stack.Screen
              name="AdministratorPage"
              component={AdministratorPage}
              options={{ title: 'Requisitar nova porta' }}
            />

            <Stack.Screen
              name="Logs"
              component={Logs}
              options={{ title: 'Notificações' }}
            />

            <Stack.Screen
              name="NewUser"
              component={NewUser}
              options={{ title: 'Cadastrar novo usuário' }}
            />

            <Stack.Screen
              name="DoorsList"
              component={DoorsList}
              options={{ title: 'Lista de portas' }}
            />

            <Stack.Screen
              name="MyPackages"
              component={MyPackages}
              options={{ title: 'Minhas encomendas' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </QueryClientProvider>
  )
}
